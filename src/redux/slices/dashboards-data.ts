import { createSlice } from "@reduxjs/toolkit";
import { Dashboard } from "../../interfaces";

export const initialState: { dashboards: Dashboard[] } = {
  dashboards: [],
};

export const dashboardsSlice = createSlice({
  name: "dashboards",
  initialState,
  reducers: {
    addDashboard: (state, action) => {
      state.dashboards.push(action.payload);
    },
    fetchDashboards: (state, action) => {
      state.dashboards = action.payload;
    },
    deleteDashboard: (state, action) => {
      state.dashboards = state.dashboards.filter((dashboard) => dashboard.id !== action.payload);
    },
    updateDashboard: (state, action) => {
      const { id, name } = action.payload;
      const existingDashboard = state.dashboards.find((dashboard) => dashboard.id === id);
      if (existingDashboard) {
        existingDashboard.name = name;
      }
    },
  },
});

export const { addDashboard, fetchDashboards, deleteDashboard, updateDashboard } = dashboardsSlice.actions;

export default dashboardsSlice.reducer;
