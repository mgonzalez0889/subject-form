import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-formulario-subject',
  templateUrl: './formulario-subject.component.html',
  styleUrls: ['./formulario-subject.component.css']
})
export class FormularioSubjectComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public editForm = {
    target: '',
    payload: '',
    isEdit: false,
  };
  constructor(
    private subjectSvr: SubjectService
  ) {
    // this.subscription =
  }

  ngOnInit(): void {
    this.listen();

  }

  public listen(): void {
  this.subscription = this.subjectSvr.getForm().subscribe(res => {
      if (res){
        console.log(res);
      }else {
        console.log('NOOOOO');
      }

    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
