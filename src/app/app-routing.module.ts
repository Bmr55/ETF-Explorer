import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ETFListComponent } from './etf-list/etf-list.component';
import { ETFDetailsComponent } from './etf-details/etf-details.component';
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: '', component: ETFListComponent },
  { path: 'etfs/:etfId', component: ETFDetailsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
