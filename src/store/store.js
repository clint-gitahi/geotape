import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducers from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'measurements',
  storage: AsyncStorage,
};

const logger = createLogger();
const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducers, applyMiddleware(logger));
let persistor = persistStore(store);

export {store, persistor};
