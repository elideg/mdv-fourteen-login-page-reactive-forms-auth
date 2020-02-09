import { Injectable } from '@angular/core';

import { Action, select, Store } from '@ngrx/store';

import * as fromKangaroos from './kangaroos.reducer';
import * as kangaroosActions from './kangaroos.actions';
import * as kangaroosSelectors from './kangaroos.selectors';
import { Kangaroo } from '@mdv-fourteen/core-data';

@Injectable({
  providedIn: 'root'
})
export class KangaroosFacade {
  allKangaroos$ = this.store.pipe(select(kangaroosSelectors.selectAllKangaroos));
  selectedKangaroo$ = this.store.pipe(select(kangaroosSelectors.selectKangaroo));
  kangarooLoading$ = this.store.pipe(select(kangaroosSelectors.selectKangaroosLoading));

  constructor(private store: Store<fromKangaroos.KangaroosPartialState>) {}

  selectKangaroo(selectedKangarooId: string) {
    this.dispatch(kangaroosActions.kangarooSelected({ selectedKangarooId }));
  }

  loadKangaroos() {
    this.dispatch(kangaroosActions.loadKangaroos());
  }

  createKangaroo(kangaroo: Kangaroo) {
    this.dispatch(kangaroosActions.createKangaroo({ kangaroo }));
  }

  updateKangaroo(kangaroo: Kangaroo) {
    this.dispatch(kangaroosActions.updateKangaroo({ kangaroo }));
  }

  deleteKangaroo(kangaroo: Kangaroo) {
    this.dispatch(kangaroosActions.deleteKangaroo({ kangaroo }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
