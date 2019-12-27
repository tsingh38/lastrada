import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../catalog/cart/cart.service';
import { NgForm } from '@angular/forms';
import { CustomerInformationService } from './CustomerInformationService';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent implements OnInit {

  constructor(private CustomerInformation:CustomerInformationService) { }
  @ViewChild('f', { static: false }) formRef: NgForm;
  allTimeSlots:string[]=[];
  defaultPaymentType='Bar';
  defaultWishDeliveryTime='So schnell wie möglich';
  
  ngOnInit() {
  this.allTimeSlots=this.CustomerInformation.fetchCurrentTimeSlots();
  }

  fetchCurrentTimeSlots(){

  }

  onSubmit() {
    console.log(this.formRef);
  }

}
