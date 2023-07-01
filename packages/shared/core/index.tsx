import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppState, AppDispatch } from './src/store';

export { store } from './src/store';

export { themeSlice } from './src/stores/theme';
export { Provider } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export * from './src/utils/local-authorization/local-authorization';
