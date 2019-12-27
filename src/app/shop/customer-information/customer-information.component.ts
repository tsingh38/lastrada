import { Component, OnInit } from '@angular/core';
import { CartService } from '../catalog/cart/cart.service';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.scss']
})
export class CustomerInformationComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit() {
  }

}
