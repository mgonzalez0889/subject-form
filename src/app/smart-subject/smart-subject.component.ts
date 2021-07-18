import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormularioSubjectComponent} from "../formulario-subject/formulario-subject.component";

@Component({
  selector: 'app-smart-subject',
  templateUrl: './smart-subject.component.html',
  styleUrls: ['./smart-subject.component.css']
})
export class SmartSubjectComponent implements OnInit {

  constructor(
    private subjectSvr: SubjectService,
    private modalService: NgbModal,
  ) { }
  show = false;
  ngOnInit(): void {
  }

  onNew(): void {
    this.show = true;
    this.subjectSvr.newForm( true, 'CREATE');
    const modalRef = this.modalService.open(FormularioSubjectComponent);
    modalRef.componentInstance.name = 'World';
  }

}
