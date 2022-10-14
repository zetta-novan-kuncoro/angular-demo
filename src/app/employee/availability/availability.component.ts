import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss']
})
export class AvailabilityComponent implements OnInit {
  public employees: Observable<Employee[]>

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.employees$
  }

  ngOnInit(): void {
  }

}
