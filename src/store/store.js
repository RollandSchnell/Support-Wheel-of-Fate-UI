import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import promiseMiddleware from 'redux-promise-middleware';

import combineReducers from '../reducers/index';

import logger from 'redux-logger'


const middleware = [promiseMiddleware(), logger, thunk];

const initialState = {};

const AppStore = () => {
    return createStore(combineReducers, initialState, applyMiddleware(...middleware));
};
export default AppStore;