import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post$: Observable<Post>
  public postId: string|null

  constructor(private blog: BlogService, private route: ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('id')
    this.post$ = this.postId ? this.blog.getPost(this.postId) : of()
  }

  ngOnInit(): void {
  }

}
