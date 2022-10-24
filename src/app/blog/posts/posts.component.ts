import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public posts$: Observable<Post[]>

  constructor(private blog: BlogService) {
    this.posts$ = this.blog.getPosts()
  }

  ngOnInit(): void {
  }

}
