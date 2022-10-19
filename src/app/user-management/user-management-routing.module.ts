import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'user-list',
    pathMatch: 'full',
    component: UserListComponent,
  },
  {
    path: 'user-create',
    pathMatch: 'full',
    component: UserCreateComponent,
  },
  {
    path: 'user-edit/:id',
    pathMatch: 'full',
    component: UserCreateComponent,
  },
  {
    path: 'user-detail/:id',
    pathMatch: 'full',
    component: UserDetailComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'user-list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
