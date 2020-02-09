import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as kangaroosActions from './kangaroos.actions';
import { Kangaroo } from '@mdv-fourteen/core-data';

export const KANGAROOS_FEATURE_KEY = 'kangaroos';

export interface KangaroosState extends EntityState<Kangaroo> {
  selectedKangarooId?: string | number;
  isLoading: boolean;
}

export interface KangaroosPartialState {
  readonly [KANGAROOS_FEATURE_KEY]: KangaroosState;
}

export const kangaroosAdapter: EntityAdapter<Kangaroo> = createEntityAdapter<Kangaroo>();

export const initialState: KangaroosState = kangaroosAdapter.getInitialState({
  // set initial required properties
  selectedKangarooId: null,
  isLoading: false
});

const kangaroosReducer = createReducer(
  initialState,
  on(kangaroosActions.kangarooSelected, (state, { selectedKangarooId }) =>
    Object.assign({}, state, { selectedKangarooId })
  ),
  on(kangaroosActions.kangaroosLoaded, (state, { kangaroos }) =>
    kangaroosAdapter.addAll(kangaroos, { ...state, isLoading: false })
  ),
  on(kangaroosActions.kangarooCreated, (state, { kangaroo }) =>
    kangaroosAdapter.addOne(kangaroo, { ...state, isLoading: false })
  ),
  on(kangaroosActions.kangarooUpdated, (state, { kangaroo }) =>
    kangaroosAdapter.upsertOne(kangaroo, { ...state, isLoading: false })
  ),
  on(kangaroosActions.kangarooDeleted, (state, { kangaroo }) =>
    kangaroosAdapter.removeOne(kangaroo.id, { ...state, isLoading: false })
  ),
  on(
    kangaroosActions.loadKangaroos,
    kangaroosActions.createKangaroo,
    kangaroosActions.updateKangaroo,
    kangaroosActions.deleteKangaroo,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
);

export function reducer(state: KangaroosState | undefined, action: Action) {
  return kangaroosReducer(state, action);
}
