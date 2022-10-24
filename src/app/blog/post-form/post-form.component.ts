import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators'
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  private postId: string|null
  public post$: Observable<Post>
  public form: FormGroup

  constructor(private router: Router, private route: ActivatedRoute, private blog: BlogService) {
    this.form = new FormGroup({
      title: new FormControl<string|null>(null),
      body: new FormControl<string|null>(null),
    })
    this.postId = this.route.snapshot.paramMap.get('id')
    this.post$ = this.postId ? this.blog.getPost(this.postId).pipe(
      tap((post) => {
        this.form.patchValue(post)
      })
    ) : of<Post>({
      title: '',
      body: '',
      userId: 0,
    })
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.form)
    if (!this.form.valid) {
      this.form.markAllAsTouched()
    }
    this.post$ = this.postId ? this.blog.patchPost(this.postId, this.form.value) : this.blog.createPost(this.form.value)
  }

}
