import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-management',
    pathMatch: 'prefix',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'user-management',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
