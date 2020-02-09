import { createAction, props } from '@ngrx/store';

import { Kangaroo } from '@mdv-fourteen/core-data';

export const kangarooSelected = createAction(
  '[KANGAROO] Kangaroo Selected',
  props<{ selectedKangarooId: string }>()
);

// Load Actions
export const loadKangaroos = createAction('[KANGAROO] Load Kangaroos');

export const kangaroosLoaded = createAction(
  '[KANGAROO] Kangaroos Loaded',
  props<{ kangaroos: Kangaroo[] }>()
);

// Create Actions
export const createKangaroo = createAction(
  '[KANGAROO] Create Kangaroo',
  props<{ kangaroo: Kangaroo }>()
);

export const kangarooCreated = createAction(
  '[KANGAROO] Kangaroo Created',
  props<{ kangaroo: Kangaroo }>()
);

// Update Actions
export const updateKangaroo = createAction(
  '[KANGAROO] Update Kangaroo',
  props<{ kangaroo: Kangaroo }>()
);

export const kangarooUpdated = createAction(
  '[KANGAROO] Kangaroo Updated',
  props<{ kangaroo: Kangaroo }>()
);

// Delete Actions
export const deleteKangaroo = createAction(
  '[KANGAROO] Delete Kangaroo',
  props<{ kangaroo: Kangaroo }>()
);

export const kangarooDeleted = createAction(
  '[KANGAROO] Kangaroo Deleted',
  props<{ kangaroo: Kangaroo }>()
);
