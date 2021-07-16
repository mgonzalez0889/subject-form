import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public subject: Subject<{type?: boolean, target: string, payload?: any}> = new Subject<{type: boolean, target: string, payload?: any}>();
  constructor(
    private http: HttpClient
  ) { }

  public newForm(target: string) {
    this.subject.next({target});
  }

  public editForm(target: string, payload: any) {
    // console.log({target, payload});
    this.subject.next({target, payload});
  }

  public getForm(): Observable<any> {
    return this.subject.asObservable();
  }


}
