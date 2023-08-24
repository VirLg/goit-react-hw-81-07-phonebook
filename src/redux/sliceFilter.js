import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
  name: 'contactFilter',
  initialState: '',
  reducers: {
    filter: (_, action) => action.payload,
  },
});

export const { filter } = sortSlice.actions;
export default sortSlice.reducer;
