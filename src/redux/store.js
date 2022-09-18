import { configureStore } from '@reduxjs/toolkit';
import filterReduser from './contact/reduser';
import { contactsApi } from './contact/contactsApi';

const store = configureStore({
   reducer: {
      filter: filterReduser,
      [contactsApi.reducerPath]: contactsApi.reducer,
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
   ],
   devTools: process.env.NODE_ENV === 'development',
});

export default store;