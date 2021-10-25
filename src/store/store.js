import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducers from '../reducers';

const logger = createLogger();

const store = createStore(rootReducers, applyMiddleware(logger));

export {store};
