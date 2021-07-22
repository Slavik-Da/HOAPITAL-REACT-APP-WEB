import {createAction} from 'redux-actions';
import * as types from '../types/app';

export const loaderOnAction    = createAction(types.LOADER_ON);
export const loaderOffAction   = createAction(types.LOADER_OFF);
export const switchMenuVisible = createAction(types.SWITCH_MENU_STATE);