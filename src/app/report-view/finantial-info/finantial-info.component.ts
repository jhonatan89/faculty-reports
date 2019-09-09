
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { FinantialInfoService  } from './finantial-info.service';
import { FinantialInfoModel } from './finantial-info.model'




@Component({
  selector: 'finantial-info-search-filter',
  templateUrl: './finantial-info.component.html',
  styleUrls: ['./finantial-info.component.scss']
})
export class FinantialInfoComponent implements OnInit {

  finantialInfoModel: FinantialInfoModel = new FinantialInfoModel();
  formGroup: FormGroup;
  genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: FinantialInfoService) { 
    this.formGroup = this._formBuilder.group({
		typeProyectCtrl: ['', Validators.compose([])], 		titleCtrl: ['', Validators.compose([])], 		initialYearCtrl: ['', Validators.compose([])], 		endYearCtrl: ['', Validators.compose([])], 		sapMaskCtrl: ['', Validators.compose([])], 		externalIdCtrl: ['', Validators.compose([])], 		directorCtrl: ['', Validators.compose([])], 		participantsCtrl: ['', Validators.compose([])], 		productStateCtrl: ['', Validators.compose([])], 		finantialEntityCtrl: ['', Validators.compose([])], 		budgetValuesCtrl: ['', Validators.compose([])], 		finantialValuesCtrl: ['', Validators.compose([])], 		visualOptionsCtrl: ['', Validators.compose([])] 
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }

  ngOnInit() {
  }


  saveModel(model: any){
      this.filterService.updateFilterData(model);
  }

  cleanFields(){
    this.formGroup.reset();
    this.finantialInfoModel = new FinantialInfoModel();
  }




}
