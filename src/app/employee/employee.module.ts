import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AvailabilityComponent } from './availability/availability.component';
import { PresenceRecorderComponent } from './presence-recorder/presence-recorder.component';


@NgModule({
  declarations: [
    AvailabilityComponent,
    PresenceRecorderComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
