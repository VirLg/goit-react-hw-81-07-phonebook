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
    // state.contactApi.contactsApi.filter(el => el.id !== id);
    return ApiDelete(id);
  }
);
