import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommandesPage } from './commandes.page';
import { AuthService } from '../services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: CommandesPage,
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandesPageRoutingModule { }
