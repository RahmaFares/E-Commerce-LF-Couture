import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // default storage for web

// Configuration object for redux-persist
const persistConfig = {
  key: "root", // Key used for the persistor
  version: 1, // Version of the persistor, can be used to manage migrations
  storage, // The storage engine to use for persisting the state
};

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  user: userReducer, // User reducer
  product: productReducer, // Product reducer
});

// Enhance the root reducer with persist capabilities
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Configuration for handling serialization checks
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor for the store
export let persistor = persistStore(store);
