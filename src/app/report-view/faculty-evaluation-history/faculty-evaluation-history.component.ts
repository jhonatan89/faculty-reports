
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FacultyEvaluationHistoryService  } from './faculty-evaluation-history.service';
import { FacultyEvaluationHistoryModel } from './faculty-evaluation-history.model'




@Component({
  selector: 'faculty-evaluation-history-search-filter',
  templateUrl: './faculty-evaluation-history.component.html',
  styleUrls: ['./faculty-evaluation-history.component.scss']
})
export class FacultyEvaluationHistoryComponent implements OnInit {

  facultyEvaluationHistoryModel: FacultyEvaluationHistoryModel = new FacultyEvaluationHistoryModel();
  formGroup: FormGroup;
  genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: FacultyEvaluationHistoryService) { 
    this.formGroup = this._formBuilder.group({
		showGroupingCtrl: ['', Validators.compose([])], 		showDetailCtrl: ['', Validators.compose([])], 		visualOptionsCtrl: ['', Validators.compose([])] 
    });
    
    
    
    
  }

  ngOnInit() {
  }


  saveModel(model: any){
      this.filterService.updateFilterData(model);
  }

  cleanFields(){
    this.formGroup.reset();
    this.facultyEvaluationHistoryModel = new FacultyEvaluationHistoryModel();
  }




}
