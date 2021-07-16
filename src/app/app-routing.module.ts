import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GridSubjectComponent} from './grid-subject/grid-subject.component';
import {SmartSubjectComponent} from './smart-subject/smart-subject.component';

const routes: Routes = [
  {
    path: 'grid',
    component: SmartSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
