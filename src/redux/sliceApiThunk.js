import { createSlice } from '@reduxjs/toolkit';
import {
  contactsAddThunk,
  contactsDeleteThunk,
  contactsThunk,
} from './thunk';
import { initialState } from './initialState';

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.contactsApi = action.payload.data;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleDeleteFulfielled = (state, { payload }) => {
  state.contactsApi = state.contactsApi.filter(
    el => el.id !== payload.data.id
  );
};

export const handleAddFulfielled = (state, action) => {
  state.contactsApi = [...state.contactsApi, action.payload.data];
};

export const contactApiSlice = createSlice({
  name: 'contactApi',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsThunk.fulfilled, handleFulfilled)
      .addCase(contactsDeleteThunk.fulfilled, handleDeleteFulfielled)
      .addCase(contactsAddThunk.fulfilled, handleAddFulfielled)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export default contactApiSlice.reducer;
export const { push } = contactApiSlice.actions;

// не свариться) залишив для себе))
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
