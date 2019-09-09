
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductionEvaluationCategoryService  } from './production-evaluation-category.service';
import { ProductionEvaluationCategoryModel } from './production-evaluation-category.model'




@Component({
  selector: 'production-evaluation-category-search-filter',
  templateUrl: './production-evaluation-category.component.html',
  styleUrls: ['./production-evaluation-category.component.scss']
})
export class ProductionEvaluationCategoryComponent implements OnInit {

  productionEvaluationCategoryModel: ProductionEvaluationCategoryModel = new ProductionEvaluationCategoryModel();
  formGroup: FormGroup;
  genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: ProductionEvaluationCategoryService) { 
    this.formGroup = this._formBuilder.group({
		initialYearCtrl: ['', Validators.compose([])], 		endYearCtrl: ['', Validators.compose([])], 		productTypeCtrl: ['', Validators.compose([])], 		facultyFocusCtrl: ['', Validators.compose([])], 		showDetailCtrl: ['', Validators.compose([])], 		showPointersCtrl: ['', Validators.compose([])], 		visualOptionsCtrl: ['', Validators.compose([])] 
    });
    
    
    
    
    
    
    
    
  }

  ngOnInit() {
  }


  saveModel(model: any){
      this.filterService.updateFilterData(model);
  }

  cleanFields(){
    this.formGroup.reset();
    this.productionEvaluationCategoryModel = new ProductionEvaluationCategoryModel();
  }




}
