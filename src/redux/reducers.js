// import { combineReducers } from 'redux';
import { contactSlice } from './slice';
import { contactApiSlice } from './sliceApiThunk';
import { sortSlice } from './sliceFilter';

export const reducer = {
  contactsBook: contactSlice.reducer,
  contactFilter: sortSlice.reducer,
  contactApi: contactApiSlice.reducer,
  deleteCont: contactApiSlice.reducer,
};
