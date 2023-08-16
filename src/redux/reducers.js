import { combineReducers } from 'redux';
import { contactSlice } from './slice';
import { sortSlice } from './sliceFilter';
export const reducer = {
  contactsBook: contactSlice.reducer,
  contactFilter: sortSlice.reducer,
};
