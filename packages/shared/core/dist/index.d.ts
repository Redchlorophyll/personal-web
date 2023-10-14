import * as redux_thunk from 'redux-thunk';
import * as redux from 'redux';
import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import * as immer_dist_internal from 'immer/dist/internal';
import { TypedUseSelectorHook } from 'react-redux';
export * from 'react-redux';
import * as _reduxjs_toolkit_dist_configureStore from '@reduxjs/toolkit/dist/configureStore';
import { User } from 'firebase/auth';

interface ThemeState {
    theme: String;
}
declare const themeSlice: _reduxjs_toolkit.Slice<ThemeState, {
    toggleLight: (state: immer_dist_internal.WritableDraft<ThemeState>) => void;
    toggleDark: (state: immer_dist_internal.WritableDraft<ThemeState>) => void;
    setTheme: (state: immer_dist_internal.WritableDraft<ThemeState>, action: PayloadAction<String>) => void;
    localStorageTheme: (state: immer_dist_internal.WritableDraft<ThemeState>) => void;
}, "themeConfig">;

declare const makeStore: () => _reduxjs_toolkit_dist_configureStore.ToolkitStore<{
    theme: ThemeState;
}, redux.AnyAction, [_reduxjs_toolkit.ThunkMiddleware<{
    theme: ThemeState;
}, redux.AnyAction, undefined>]>;
declare const store: _reduxjs_toolkit_dist_configureStore.ToolkitStore<{
    theme: ThemeState;
}, redux.AnyAction, [_reduxjs_toolkit.ThunkMiddleware<{
    theme: ThemeState;
}, redux.AnyAction, undefined>]>;
type AppStore = ReturnType<typeof makeStore>;
type AppState = ReturnType<AppStore['getState']>;

declare function isUserAuthorized(user: User): boolean;

declare const useAppDispatch: () => redux_thunk.ThunkDispatch<{
    theme: ThemeState;
}, undefined, redux.AnyAction> & redux.Dispatch<redux.AnyAction>;
declare const useAppSelector: TypedUseSelectorHook<AppState>;

export { isUserAuthorized, store, themeSlice, useAppDispatch, useAppSelector };
