import { RoutingModule } from './../../../../apps/dashboard/src/app/routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@mdv-fourteen/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  declarations: [ToolbarComponent, LoginComponent, WildComponent],
  exports: [ToolbarComponent, LoginComponent, WildComponent]
})
export class UiLibModule {}
