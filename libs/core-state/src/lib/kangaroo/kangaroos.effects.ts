import { KangaroosFacade } from './kangaroos.facade';
import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import * as kangaroosActions from './kangaroos.actions';
import { Kangaroo, KangarooService } from '@mdv-fourteen/core-data';
import { KangaroosPartialState } from './kangaroos.reducer';
import { NotifyService } from '@mdv-fourteen/core-data';

@Injectable()
export class KangaroosEffects {
  loadKangaroos$ = createEffect(() =>
    this.dataPersistence.fetch(kangaroosActions.loadKangaroos, {
      run: (
        action: ReturnType<typeof kangaroosActions.loadKangaroos>,
        state: KangaroosPartialState
      ) => {
        return this.kangaroosService.all().pipe(
          tap((res) => console.log(res)),
          map((kangaroos: Kangaroo[]) => kangaroosActions.kangaroosLoaded({ kangaroos }))
        );
      },
      onError: (action: ReturnType<typeof kangaroosActions.loadKangaroos>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  addKangaroo$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(kangaroosActions.createKangaroo, {
      run: (
        action: ReturnType<typeof kangaroosActions.createKangaroo>,
        state: KangaroosPartialState
      ) => {
        return this.kangaroosService.create(action.kangaroo).pipe(
          map((kangaroo: Kangaroo) => kangaroosActions.kangarooCreated({ kangaroo })),
          tap(() => this.notify.notification('Successfully Added a Kangaroo'))
        );
      },
      onError: (action: ReturnType<typeof kangaroosActions.createKangaroo>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  updateKangaroo$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(kangaroosActions.updateKangaroo, {
      run: (
        action: ReturnType<typeof kangaroosActions.updateKangaroo>,
        state: KangaroosPartialState
      ) => {
        return this.kangaroosService.update(action.kangaroo).pipe(
          map((kangaroo: Kangaroo) => kangaroosActions.kangarooUpdated({ kangaroo })),
          tap(() => this.notify.notification('Successfully Updated a Kangaroo'))
        );
      },
      onError: (action: ReturnType<typeof kangaroosActions.updateKangaroo>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  deleteKangaroo$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(kangaroosActions.deleteKangaroo, {
      run: (
        action: ReturnType<typeof kangaroosActions.deleteKangaroo>,
        state: KangaroosPartialState
      ) => {
        return this.kangaroosService.delete(action.kangaroo).pipe(
          map((kangaroo: Kangaroo) => kangaroosActions.kangarooDeleted({ kangaroo })),
          tap(() => this.notify.notification('Successfully Deleted a Kangaroo')),
          tap(() => this.kangarooFacade.loadKangaroos())
        );
      },
      onError: (action: ReturnType<typeof kangaroosActions.deleteKangaroo>, error) => {
        console.log('Effect Error:', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<KangaroosPartialState>,
    private kangaroosService: KangarooService,
    private notify: NotifyService,
    private kangarooFacade: KangaroosFacade
  ) {}
}
