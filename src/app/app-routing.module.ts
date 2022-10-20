import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    pathMatch: 'prefix',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'blog',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
