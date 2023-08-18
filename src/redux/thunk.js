import { createAsyncThunk } from '@reduxjs/toolkit';
import Api, { ApiDelete } from 'api/Api';

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
