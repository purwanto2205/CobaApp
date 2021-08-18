/**
 * @format
 */

import React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import {persistReducer} from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';
import {name as appName} from './app.json';

import rootReducer from './src/reducers';
import RootNavigation from './src/navigations';

const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

const CobaApp = () => (
  <Provider store={store}>
    <RootNavigation />
  </Provider>
);

AppRegistry.registerComponent(appName, () => CobaApp);
