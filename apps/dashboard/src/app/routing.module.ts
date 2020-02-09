import { WildComponent } from '@mdv-fourteen/ui-lib';
import { AuthGuard } from '@mdv-fourteen/core-data';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: nx-enforce-module-boundaries
import { LoginComponent } from 'libs/ui-lib/src/lib/login/login.component';
import { KangarooComponent } from './kangaroo/kangaroo.component';
import { KangarooItemComponent } from './kangaroo/kangaroo-item/kangaroo-item.component';
// tslint:disable-next-line: nx-enforce-module-boundaries


const routes: Routes = [
  { path: 'kangaroos', canActivate: [AuthGuard], children: [
    { path: '', component: KangarooComponent },
    { path: ':id', component: KangarooItemComponent }
  ] },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: '404', component: WildComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }
