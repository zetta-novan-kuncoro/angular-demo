import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private employeeId: string|null = null
  public employee: Observable<Employee|null> = of(null)

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {
    this.employeeId = this.route.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    if (typeof this.employeeId === 'string') {
      this.employee = this.employeeService.getEmployeeById(this.employeeId)
    }
  }

}
