import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _employees: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([
    { id: '1', name: 'Agus Widjaya', title: 'Barista', available: true },
    { id: '2', name: 'Elissa Widyaningsih', title: 'Barista', available: true },
  ])
  public employees$: Observable<Employee[]> = this._employees.asObservable()

  constructor() { }

  getEmployeeById(id: string): Observable<Employee|null> {
    return this.employees$.pipe(
      map(employees => {
        const employee = employees.find(employee => employee.id === id)
        return employee || null;
      }
    ))
  }
}
