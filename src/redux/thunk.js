const { createSlice } = require('@reduxjs/toolkit');

const contactsThunk = second => {
  return async dispatch => dispatch();
};

const initialState = {
  contactsApi: [],
  isLoading: false,
  error: '',
};
export const contactApiSlice = createSlice({
  name: 'contactApi',
  initialState,
  reducers: {
    fetching: state => (state.isLoading = true),
  },
  fetchSuccess: (state, action) => {
    state.isLoading = false;
    state.contactsApi = action.payload;
    state.error = '';
  },
  fetchError: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
export const { fetching, fetchSuccess, fetchError } =
  contactApiSlice.actions;
export default contactApiSlice.reducer;
