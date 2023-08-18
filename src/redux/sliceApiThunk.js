import { createSlice } from '@reduxjs/toolkit';
import { contactsThunk } from './thunk';
import { initialState } from './initialState';

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.contactsApi = action.payload;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const contactApiSlice = createSlice({
  name: 'contactApi',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsThunk.pending, handlePending)
      .addCase(contactsThunk.fulfilled, handleFulfilled)
      .addCase(contactsThunk.rejected, handleRejected)
      .addMatcher();
  },
});

export default contactApiSlice.reducer;
// ----------------------------------------------
// extraReducers: {
// [contactsThunk.pending]: state => {
//   state.isLoading = true;
// },
// [contactsThunk.fulfilled]: (state, action) => {
//   state.isLoading = false;
//   state.contactsApi = action.payload;
//   state.error = '';
// },
// [contactsThunk.rejected]: (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// },
// -------------------------------------------------
// reducers: {
//   fetching: state => {
//     state.isLoading = true;
//   },

//   fetchSuccess: (state, action) => {
//     state.isLoading = false;
//     state.contactsApi = action.payload;
//     state.error = '';
//   },
//   fetchError: (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
// },
// -------------------------------------
// import Api from 'api/Api';
// import { fetchError, fetchSuccess, fetching } from './thunk';

// export const contactsThunk = () => {
//   return async dispatch => {
//     dispatch(fetching());
//     try {
//       const { data } = await Api();
//       console.log('data', data);
//       dispatch(fetchSuccess(data));
//     } catch (error) {
//       dispatch(fetchError(error));
//     }
//   };
// };
// export const { fetching, fetchSuccess, fetchError } =
//   contactApiSlice.actions;
