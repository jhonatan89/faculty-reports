
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductsInCompleteService  } from './products-in-complete.service';
import { ProductsInCompleteModel } from './products-in-complete.model'




@Component({
  selector: 'products-in-complete-search-filter',
  templateUrl: './products-in-complete.component.html',
  styleUrls: ['./products-in-complete.component.scss']
})
export class ProductsInCompleteComponent implements OnInit {

  productsInCompleteModel: ProductsInCompleteModel = new ProductsInCompleteModel();
  formGroup: FormGroup;
  genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: ProductsInCompleteService) { 
    this.formGroup = this._formBuilder.group({
		initialYearCtrl: ['', Validators.compose([])], 		endYearCtrl: ['', Validators.compose([])], 		productTypeCtrl: ['', Validators.compose([])], 		formatByDefaultCtrl: ['', Validators.compose([])], 		visualOptionsCtrl: ['', Validators.compose([])] 
    });
    
    
    
    
    
    
  }

  ngOnInit() {
  }


  saveModel(model: any){
      this.filterService.updateFilterData(model);
  }

  cleanFields(){
    this.formGroup.reset();
    this.productsInCompleteModel = new ProductsInCompleteModel();
  }




}
