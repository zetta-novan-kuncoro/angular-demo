import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly _baseUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(encodeURI(this._baseUrl + 'posts'))
  }

  getPost(id: string): Observable<Post> {
    const url = this._baseUrl + 'posts'
    const params = new HttpParams().set('id', id)
    return this.http.get<Post[]>(encodeURI(`${url}?${params.toString()}`)).pipe(map(response => response[0]))
  }

  createPost(payload: { title: string|null, body: string|null }): Observable<Post> {
    const url = this._baseUrl + 'posts'
    const body = JSON.stringify(payload)
    const headers = new HttpHeaders().set('Content-type', ['application/json', 'charset=UTF-8'])
    return this.http.post<Post>(encodeURI(url), body, {
      headers
    })
  }

  patchPost(id: string, payload: { title: string|null, body: string|null }): Observable<Post> {
    console.log('heer')
    const url = this._baseUrl + 'posts/' + id
    const body = JSON.stringify(payload)
    const headers = new HttpHeaders().set('Content-type', ['application/json', 'charset=UTF-8'])
    return this.http.patch<Post>(encodeURI(url), body, {
      headers
    })
  }
}
