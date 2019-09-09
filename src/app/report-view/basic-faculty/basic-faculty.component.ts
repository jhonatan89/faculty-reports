
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BasicFacultyService  } from './basic-faculty.service';
import { BasicFacultyModel } from './basic-faculty.model'




@Component({
  selector: 'basic-faculty-search-filter',
  templateUrl: './basic-faculty.component.html',
  styleUrls: ['./basic-faculty.component.scss']
})
export class BasicFacultyComponent implements OnInit {

  basicFacultyModel: BasicFacultyModel = new BasicFacultyModel();
  formGroup: FormGroup;
  genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: BasicFacultyService) { 
    this.formGroup = this._formBuilder.group({
		userCtrl: ['', Validators.compose([])], 		nameCtrl: ['', Validators.compose([])], 		documentNumberCtrl: ['', Validators.compose([])], 		colcienciasCodeCtrl: ['', Validators.compose([])], 		dependencyCtrl: ['', Validators.compose([])], 		positionCtrl: ['', Validators.compose([])], 		categoryCtrl: ['', Validators.compose([])], 		researchGroupCtrl: ['', Validators.compose([])], 		officeCtrl: ['', Validators.compose([])], 		extensionCtrl: ['', Validators.compose([])], 		webPageCtrl: ['', Validators.compose([])], 		maxAcademicLevelCtrl: ['', Validators.compose([])], 		dedicationPercentageCtrl: ['', Validators.compose([])], 		visualOptionsCtrl: ['', Validators.compose([])] 
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }

  ngOnInit() {
  }


  saveModel(model: any){
      this.filterService.updateFilterData(model);
  }

  cleanFields(){
    this.formGroup.reset();
    this.basicFacultyModel = new BasicFacultyModel();
  }




}
