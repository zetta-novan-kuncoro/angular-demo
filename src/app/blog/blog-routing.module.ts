import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: 'posts',
    pathMatch: 'full',
    component: BlogComponent,
  },
  {
    path: 'post/:id',
    pathMatch: 'full',
    component: PostComponent,
  },
  {
    path: 'post/:id/edit',
    pathMatch: 'full',
    component: PostFormComponent,
  },
  {
    path: 'posts/new',
    pathMatch: 'full',
    component: PostFormComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
