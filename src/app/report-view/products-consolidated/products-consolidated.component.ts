
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductsConsolidatedService  } from './products-consolidated.service';
import { ProductsConsolidatedModel } from './products-consolidated.model'




@Component({
  selector: 'products-consolidated-search-filter',
  templateUrl: './products-consolidated.component.html',
  styleUrls: ['./products-consolidated.component.scss']
})
export class ProductsConsolidatedComponent implements OnInit {

  productsConsolidatedModel: ProductsConsolidatedModel = new ProductsConsolidatedModel();
  formGroup: FormGroup;
  genericSearchModel: any;
  @Output() onSubmitFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder, private filterService: ProductsConsolidatedService) { 
    this.formGroup = this._formBuilder.group({
		initialYearCtrl: ['', Validators.compose([])], 		endYearCtrl: ['', Validators.compose([])], 		productTypeCtrl: ['', Validators.compose([])], 		formatByDefaultCtrl: ['', Validators.compose([])], 		showDetailCtrl: ['', Validators.compose([])], 		visualOptionsCtrl: ['', Validators.compose([])] 
    });
    
    
    
    
    
    
    
  }

  ngOnInit() {
  }


  saveModel(model: any){
      this.filterService.updateFilterData(model);
  }

  cleanFields(){
    this.formGroup.reset();
    this.productsConsolidatedModel = new ProductsConsolidatedModel();
  }




}
