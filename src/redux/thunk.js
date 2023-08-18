import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from 'api/Api';

export const contactsThunk = createAsyncThunk(
  'contactApi/getAllContacts',
  () => {
    return Api();
  }
);
