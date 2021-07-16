import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-smart-subject',
  templateUrl: './smart-subject.component.html',
  styleUrls: ['./smart-subject.component.css']
})
export class SmartSubjectComponent implements OnInit {

  constructor(
    private subjectSvr: SubjectService
  ) { }

  ngOnInit(): void {
  }

  onNew(): void {
    this.subjectSvr.newForm('CREATE');
  }

}
