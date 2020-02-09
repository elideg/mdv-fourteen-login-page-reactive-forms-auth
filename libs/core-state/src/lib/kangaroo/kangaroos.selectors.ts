import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  KANGAROOS_FEATURE_KEY,
  kangaroosAdapter,
  KangaroosPartialState,
  KangaroosState
} from './kangaroos.reducer';

// Lookup the 'Kangaroos' feature state managed by NgRx
export const selectKangaroosState = createFeatureSelector<
  KangaroosPartialState,
  KangaroosState
>(KANGAROOS_FEATURE_KEY);

const { selectAll, selectEntities } = kangaroosAdapter.getSelectors();

export const selectKangaroosLoading = createSelector(
  selectKangaroosState,
  (state: KangaroosState) => state.isLoading
);

export const selectAllKangaroos = createSelector(
  selectKangaroosState,
  (state: KangaroosState) => selectAll(state)
);

export const selectKangaroosEntities = createSelector(
  selectKangaroosState,
  (state: KangaroosState) => selectEntities(state)
);

export const selectKangarooId = createSelector(
  selectKangaroosState,
  (state: KangaroosState) => state.selectedKangarooId
);

export const selectKangaroo = createSelector(
  selectKangaroosEntities,
  selectKangarooId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
