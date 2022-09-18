import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contact/contactsApi';
import { filterSlice } from '../redux/contact/contactsSlice';

const store = configureStore({
   reducer: {
      filter: filterSlice.reducer,
      [contactsApi.reducerPath]: contactsApi.reducer,
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
   ],
   devTools: process.env.NODE_ENV === 'development',
});

export default store;