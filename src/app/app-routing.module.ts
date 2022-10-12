import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cashier',
    pathMatch: 'prefix',
    loadChildren: () => import('./cashier/cashier.module').then(m => m.CashierModule),
  },
  {
    path: 'employee',
    pathMatch: 'prefix',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'cashier',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
