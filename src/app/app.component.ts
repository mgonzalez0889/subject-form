import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'subject';
  private sourceSubject = new Subject<string>();
  private sourceBehavior = new BehaviorSubject<string>('initial');

  ngOnInit(): void {
    /*this.sourceBehavior.next('Nuevo Valor');
    this.sourceBehavior.subscribe(res => console.log(res));
    this.sourceBehavior.subscribe(res => console.log(res));
    this.sourceBehavior.subscribe(res => console.log(res));*/

  //  this.sourceSubject.next('Subject => Hola');
  // this.sourceSubject.next('Subject => Hola');
  //  this.sourceSubject.next('Subject => Hola');
  //  this.sourceSubject.next('Subject => Hola');

  //  this.sourceSubject.subscribe(res => console.log(res));
  //  this.sourceSubject.next('Subject => Hola');
  }

}
