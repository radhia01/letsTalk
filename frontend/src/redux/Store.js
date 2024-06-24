import rootreducers from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from "redux-thunk";
const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, rootreducers)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)

