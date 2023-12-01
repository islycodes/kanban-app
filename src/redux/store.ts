import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import dashboardsSlice from "./slices/dashboards-data";
import ticketsSlice from "./slices/tickets-data";

export const store = configureStore({
  reducer: {
    dashboards: dashboardsSlice,
    tasks: ticketsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
