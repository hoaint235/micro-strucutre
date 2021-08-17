import { RootState } from 'reducer';
import { Action as ReduxAction } from 'redux';

declare interface Action<T = any> {
  readonly type: string;
  readonly payload?: T;
}

declare type Dispatch<T = any> = (_: Action<T>) => void;

declare type StateFetcher = () => RootState;

declare type AsyncAction = ThunkAction<
  void,
  RootState,
  unknown,
  ReduxAction<string>
>;
