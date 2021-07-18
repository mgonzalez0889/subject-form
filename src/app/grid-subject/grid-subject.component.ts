import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormularioSubjectComponent} from "../formulario-subject/formulario-subject.component";

@Component({
  selector: 'app-grid-subject',
  templateUrl: './grid-subject.component.html',
  styleUrls: ['./grid-subject.component.css']
})
export class GridSubjectComponent implements OnInit {

  constructor(
    private subjectSvr: SubjectService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  public onPerson(): void {
    const data = {
      name: 'Julio Florez',
      year: 58,
      status: true
    };
    this.subjectSvr.editForm('EDIT', data);
    const modalRef = this.modalService.open(FormularioSubjectComponent);
    modalRef.componentInstance.name = data.name;
  }

}
