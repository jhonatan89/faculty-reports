
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductionEvaluationCursosService  } from './production-evaluation-cursos.service';
import { ProductionEvaluationCursosModel } from './production-evaluation-cursos.model'




@Component({
  selector: 'production-evaluation-cursos-search-filter',
  templateUrl: './production-evaluation-cursos.component.html',
  styleUrls: ['./production-evaluation-cursos.component.scss']
})
export class ProductionEvaluationCursosComponent implements OnInit {

  productionEvaluationCursosModel: ProductionEvaluationCursosModel = new ProductionEvaluationCursosModel();
  formGroup: FormGroup;
  genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: ProductionEvaluationCursosService) { 
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
    this.productionEvaluationCursosModel = new ProductionEvaluationCursosModel();
  }




}
