import {handleActions} from 'redux-actions';
import { UiState } from './interfaces/app';
import * as types from '../types/app';

const initialState : UiState = {
    isLoading: false,
    error: null,
    menuVisible: false
};

export const appReducer = handleActions<UiState, any>({
    [types.LOADER_ON]: (state : UiState) => ({
        ...state,
        isLoading: true,
    }),
    [types.LOADER_OFF]: (state: UiState) => ({
        ...state,
        isLoading: false
    }),
    [types.SWITCH_MENU_STATE]: (state: UiState) => ({
        ...state,
        menuVisible: !state.menuVisible
    })
}, initialState)