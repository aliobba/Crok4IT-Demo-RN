import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { encryptTransform } from 'redux-persist-transform-encrypt';

import authReducer from './auth/reducer';
import productReducer from './product/reducer';

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const encryptor = encryptTransform({
  secretKey: 'Crok4it',
  onError: function (error) {
    // Handle the error.
  },
})

const rootReducer = combineReducers({
  authReducer: authReducer,
  productReducer: productReducer
})

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,

  transforms: [encryptor],
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer'],
  blacklist: []
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
// Middleware: Redux Persist Persister
let persistor = persistStore(store);

export {
  store,
  persistor
};