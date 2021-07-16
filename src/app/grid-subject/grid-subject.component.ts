import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-grid-subject',
  templateUrl: './grid-subject.component.html',
  styleUrls: ['./grid-subject.component.css']
})
export class GridSubjectComponent implements OnInit {

  constructor(
    private subjectSvr: SubjectService
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
  }

}
