import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentsModel } from '../models/comments.model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _http: HttpClient) {


  }


  form: FormGroup = new FormGroup({
    postId: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    body: new FormControl(''),
  })

  initializeFormGroup() {
    this.form.setValue({
      postId: '',
      id: '',
      name: '',
      email: '',
      body: '',
    })
  }

  populateForm(comments: any) {
    this.form.setValue(comments);
  }

  getcomments(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }


  insupdcomments(comments: CommentsModel): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this._http.post('https://jsonplaceholder.typicode.com/posts/' + comments, httpOptions);
  }

  delcomments(id: number): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this._http.post('https://jsonplaceholder.typicode.com/posts/1/comments' + id, httpOptions);
  }

  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterby: string) {
    this._listners.next(filterby);
  }

}

