import { createAsyncThunk } from '@reduxjs/toolkit';
import Api, { ApiAdd, ApiDelete } from 'api/Api';

export const contactsThunk = createAsyncThunk(
  'contactApi/getAllContacts',
  () => {
    return Api();
  }
);
export const contactsDeleteThunk = createAsyncThunk(
  'contactApi/deleteContact',
  id => {
    return ApiDelete(id);
  }
);

export const contactsAddThunk = createAsyncThunk(
  'contactApi/addContact',
  (state, thunkAPI) => {
    try {
      return ApiAdd(state);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
