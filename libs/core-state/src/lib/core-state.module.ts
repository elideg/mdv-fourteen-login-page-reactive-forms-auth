import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { CoreDataModule } from '@mdv-fourteen/core-data';
import { reducers } from '.';
import { KangaroosEffects } from './kangaroo/kangaroos.effects'

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      KangaroosEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'mdv-fourteen Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
