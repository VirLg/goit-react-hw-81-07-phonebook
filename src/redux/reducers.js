import { contactApiSlice } from './sliceApiThunk';
import { sortSlice } from './sliceFilter';

export const reducer = {
  contactFilter: sortSlice.reducer,
  contactApi: contactApiSlice.reducer,
};
