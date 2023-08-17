// import { combineReducers } from 'redux';
import { contactSlice } from './slice';
import { sortSlice } from './sliceFilter';
import { contactApiSlice } from './thunk';
export const reducer = {
  contactsBook: contactSlice.reducer,
  contactFilter: sortSlice.reducer,
  contactApi: contactApiSlice.reducer,
};