import { createSlice } from '@reduxjs/toolkit';

const targetSlice = createSlice({
  name: 'targets',
  initialState: [],
  reducers: {
    addTarget: (state, action) => {
      state.unshift(action.payload);  // Add new target to the top
    },
    updateTargetStatus: (state, action) => {
      const target = state.find((t) => t.id === action.payload.id);
      if (target) {
        target.status = action.payload.status;
      }
    },
    editTarget: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deleteTarget: (state, action) => {
      return state.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { addTarget, updateTargetStatus, editTarget, deleteTarget } = targetSlice.actions;

export const selectTargetsByStatus = (state, status) => state.targets.filter((t) => t.status === status);

export default targetSlice.reducer;
