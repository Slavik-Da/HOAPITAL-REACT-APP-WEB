import { combineReducers } from 'redux';
import { appReducer } from './app';
import {UiState} from './interfaces/app';

export interface rootReducer{
    appState: UiState
};

export const rootReducer = combineReducers({
    appState: appReducer
});
