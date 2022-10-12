import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AvailabilityComponent } from './availability/availability.component';
import { PresenceRecorderComponent } from './presence-recorder/presence-recorder.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    AvailabilityComponent,
    PresenceRecorderComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
