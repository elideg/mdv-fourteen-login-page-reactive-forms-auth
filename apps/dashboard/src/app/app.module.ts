import { KangarooListComponent } from './kangaroo/kangaroo-list/kangaroo-list.component';
import { KangarooDetailsComponent } from './kangaroo/kangaroo-details/kangaroo-details.component';
import { CoreStateModule } from './../../../../libs/core-state/src/lib/core-state.module';
import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { CoreDataModule } from './../../../../libs/core-data/src/lib/core-data.module';
import { MaterialModule } from './../../../../libs/material/src/lib/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { KangarooComponent } from './kangaroo/kangaroo.component';
import { KangarooItemComponent } from './kangaroo/kangaroo-item/kangaroo-item.component';

@NgModule({
  declarations: [AppComponent, KangarooComponent, KangarooItemComponent, KangarooDetailsComponent, KangarooListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
