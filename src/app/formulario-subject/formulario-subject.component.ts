import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {Subscription} from 'rxjs';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-formulario-subject',
  templateUrl: './formulario-subject.component.html',
  styleUrls: ['./formulario-subject.component.css']
})
export class FormularioSubjectComponent implements OnInit, OnDestroy, AfterViewInit {
  // public subscription: Subscription;
  @Input() name;
  public editForm = {
    target: '',
    payload: '',
    isEdit: false,
  };
  subscription: Subscription = this.subjectSvr.subject.subscribe(res => {

    if (res) {
      console.log(res.type)
    }

  });
  constructor(
    private subjectSvr: SubjectService,
    public activeModal: NgbActiveModal
  ) {
    // this.subscription =
    console.log(this.name);
  }

  ngOnInit(): void {
    // this.listen();

  }

  public listen(): void {


  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log(this.name);
  }



}
