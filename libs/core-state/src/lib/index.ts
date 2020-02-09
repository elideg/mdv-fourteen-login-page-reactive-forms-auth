import { ActionReducerMap } from '@ngrx/store';

import * as fromKangaroo from './kangaroo/kangaroos.reducer';

export interface AppState {
  kangaroos: fromKangaroo.KangaroosState;
}

export const reducers: ActionReducerMap<AppState> = {
  kangaroos: fromKangaroo.reducer,
};

//---------------------------------------
// Common Selectors
//---------------------------------------
