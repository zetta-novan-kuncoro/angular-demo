import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'posts',
    pathMatch: 'full',
    component: PostsComponent,
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
    path: 'post/new',
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
