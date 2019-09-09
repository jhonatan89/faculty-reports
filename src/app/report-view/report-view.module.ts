import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReportViewComponent } from './report-view.component';
import { FinantialInfoComponent } from './';
import { BasicFacultyComponent, BasicFacultyService } from './basic-faculty';





import { SharedModule } from '../shared/shared.module';
import { FacultyEvaluationHistoryComponent, FacultyEvaluationHistoryService } from './faculty-evaluation-history';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ], 
  declarations: [ReportViewComponent, BasicFacultyComponent,FacultyEvaluationHistoryComponent, FinantialInfoComponent ],
  providers: [BasicFacultyService, FacultyEvaluationHistoryService ],
})
export class ReportViewModule { }

