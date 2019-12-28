import { ItemOrder } from './catalog/itemorder.model';

export class customerInformationAndOrderModel{
    address:string;
    pincode:string;
    city:string;
    floor:number;
    customerName:string;
    email:string;
    telefonnummer:string;
    companyname:string;
    wishDeliveryTime:string;
    comment:string;
    paymentType:string;
    order:ItemOrder[];

    constructor(address:string,pincode:string,city:string,floor:number,customerName:string,email:string,telefonnummer:string,companyname:string,wishDeliveryTime:string,comment:string,paymentType:string,order:ItemOrder[]){
this.address=address;
this.pincode=pincode;
this.city=city;
this.floor=floor;
this.customerName=customerName;
this.email=email;
this.telefonnummer=telefonnummer;
this.companyname=companyname;
this.wishDeliveryTime=wishDeliveryTime;
this.comment=comment;
this.paymentType=paymentType;
this.order=order;
    }
  
  }