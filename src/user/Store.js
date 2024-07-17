// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../user/updateuser';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
console.log(store);
export default store;
