import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailabilityComponent } from './availability/availability.component';
import { DetailComponent } from './detail/detail.component';
import { PresenceRecorderComponent } from './presence-recorder/presence-recorder.component';

const routes: Routes = [
  {
    path: 'availability',
    pathMatch: 'full',
    component: AvailabilityComponent,
  },
  {
    path: 'detail/:id',
    pathMatch: 'full',
    component: DetailComponent,
  },
  {
    path: 'presence-recorder',
    pathMatch: 'full',
    component: PresenceRecorderComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'availability',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
