import { configureStore } from '@reduxjs/toolkit';

// import { contactSlice } from './slice';
// import { sortSlice } from './sliceFilter';


import { reducer } from './reducers';



export const store = configureStore({ reducer });

// export const store = configureStore({
//   reducer: {
//     addContacts: contactSlice.reducer,
//   },
// });
// export const add = createAction('contacts/add');
// export const remove = createAction('contacts/remove');
// const myReducer = createReducer([], {
//   [add]: (state, action) => [...state, action.payload],
//   [remove]: state => [...state],
// });
