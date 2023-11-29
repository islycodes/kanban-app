import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { IBoardData, IBoardQuery, IColumnPostBody } from "../../@types/types";
import { RootState } from "../../redux/store";
import { apiSlice } from "../api/apiSlice";

// use an entity adapter for the extendedBoardApi (normalizes query response)
export const boardsAdapter = createEntityAdapter<IBoardData>({
  selectId: (board) => board.id,
  // sortComparer: (a, b) => a.id - b.id,
});

// get the initial query state from the adapter
const boardQueryInitialState = boardsAdapter.getInitialState<IBoardQuery>({
  ids: [],
  entities: {},
  status: "idle",
});

// extend the apiSlice with the board queries
export const extendedBoardsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // gets all boards
    getBoards: builder.query({
      query: () => "/dashboards",
      transformResponse: (responseData: IBoardData[]) => {
        console.log(responseData);
        return boardsAdapter.setAll(boardQueryInitialState, responseData);
      },
      providesTags: (result) => {
        return result ? [...result.ids.map((id) => ({ type: "Board" as const, id }))] : ["Board"];
      },
    }),
    // creates a single board
    createBoard: builder.mutation({
      query: (body: IColumnPostBody) => {
        return {
          url: "/dashboards/create",
          method: "POST",
          body: { ...body, user_id: "503db226-964a-4d48-8f6b-72910f081d4b" },
        };
      },
      invalidatesTags: ["Board"],
    }),
    // deletes a single board
    deleteBoard: builder.mutation({
      query: (boardId: string) => ({
        url: `/dashboards/${boardId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, boardId) => [{ type: "Board", id: boardId }],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        //optimistic update for board deletion
        const deleteResult = dispatch(
          extendedBoardsApi.util.updateQueryData("getBoards", arg, (draft) => {
            boardsAdapter.removeOne(draft, arg);
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          deleteResult.undo();
        }
      },
    }),
    // updates a single board
    updateBoard: builder.mutation({
      query: (board: IBoardData) => ({
        url: "/dashboards",
        body: { board },
        method: "PUT",
      }),
      invalidatesTags: ["Board"],
      async onQueryStarted(board, { dispatch, queryFulfilled }) {
        //optimistic update for single board update
        const updateResult = dispatch(
          extendedBoardsApi.util.updateQueryData("getBoards", undefined, (draft) => {
            boardsAdapter.updateOne(draft, { id: board.id, changes: board });
          })
        );

        try {
          await queryFulfilled;
        } catch (error) {
          updateResult.undo();
        }
      },
    }),
    //gets a single board
    getBoard: builder.query({
      query: (boardId: string) => ({
        url: `/dashboards/${boardId}`,
      }),
      providesTags: (result: IBoardData | undefined) => {
        return result ? [{ type: "Board", id: result.id }] : ["Board"];
      },
    }),
  }),
});

export const { useGetBoardsQuery, useCreateBoardMutation, useDeleteBoardMutation, useUpdateBoardMutation } = extendedBoardsApi;

// get the response for the getBoards query
export const selectBoardsResult = extendedBoardsApi.endpoints.getBoards.select(undefined);

// create a memoized selector for the boards query
const selectAllBoardsResult = createSelector(selectBoardsResult, (boardResult) => boardResult.data);

// use the boardsAdapter to access getSeletors, normalize the getBoards result
export const {
  selectAll: selectAllBoards,
  selectById: selectBoardById,
  selectIds: selectBoardIds,
} = boardsAdapter.getSelectors<RootState>((state) => selectAllBoardsResult(state) ?? boardQueryInitialState);
