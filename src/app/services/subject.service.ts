import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

interface FormObservable {
  type?: boolean;
  target: string;
  payload?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public subject: BehaviorSubject<FormObservable> = new BehaviorSubject<FormObservable>( {type: true, target: 'CREATE'} );
  constructor(
    private http: HttpClient
  ) { }

  public newForm(type: boolean, target: string): void {
    this.subject.next({type, target});
  }

  public editForm(target: string, payload: any): void {
    // console.log({target, payload});
    this.subject.next({target, payload});
  }

  public getForm(): Observable<any> {
    return this.subject.asObservable();
  }


}
