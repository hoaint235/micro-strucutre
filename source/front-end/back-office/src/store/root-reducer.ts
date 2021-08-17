import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import applicationReducer, {
  State as ApplicationState,
} from './application/reducer';

export type RootState = {
  appState: ApplicationState;
};

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;

const rootReducer = combineReducers<RootState>({
  appState: applicationReducer,
});

export default rootReducer;
