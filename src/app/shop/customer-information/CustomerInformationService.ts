import { CartService } from '../catalog/cart/cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerInformationService{


    constructor(private cartService: CartService){

    }

    fetchCurrentTimeSlots():string[]{
        var allTimeSlots:string[]=[];
        var currentDate=new Date();
        console.log(currentDate);
        return;

    }

}