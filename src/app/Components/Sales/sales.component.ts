import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Sales } from 'src/app/Model/Sales';



import { SalesService } from 'src/app/Services/Sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
  formHeader ="Edit Customer details";
  bCus: boolean = true;
  bMed: boolean = false;
  sales!: any;
  totalPrice!:number;
  saleForm!: FormGroup;
  submitted= false;

Sale:Sales= new Sales(0,"",0,0,new Date("2023-09-08"));

constructor(public saleService:SalesService, private formBuilder:FormBuilder) { }
saleId!:number;
medicineName!:string;
medicineQuantity!:number;
 price!:number;
 date!:Date;
bill!:number
showbill=false;
showForm= false;
 showBill=false;
 showFormMed=false;
  searchForm!: FormGroup;
 customers!: Sales[];

  ngOnInit() {
    this.searchForm = new FormGroup({
      date: new FormControl('')
    });


    this.saleForm = this.formBuilder.group({
      saleId: ['', Validators.required],
      medicineName: ['', Validators.required],
      medicineQuantity: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.display();
    this.display();
  }

  search(date:Date) {
   
    this.sales = this.saleService.getSaleByDate(date).subscribe((data) => this.sales = data);
    return this.sales;
  }

  display(){
    this.sales = this.saleService.getSale().subscribe((data) => this.sales = data);
     return this.sales;
  }






public addSale = async () => {
  

  this.submitted=true;

    
  if (this.Sale.medicineQuantity <= 0) {
    alert("Medicine Quantity cannot be negative or 0");
    return;
  } 
  else if (this.Sale.saleId <= 0) {
    alert("SaleId cannot be negative or 0");
    return;
  }
  else if (this.Sale.price <= 0) {
    alert("Price cannot be negative or 0");
    return;
  } 
    else if (!this.saleForm.invalid) {
      let resp = await this.saleService.postSale(this.Sale);
  resp.subscribe((data) => (this.sales = data));
    } 
    else
      return;

}

calculateBill(item:Sales){
  this.showbill=true;
this.bill=item.medicineQuantity*item.price;

}



  openBill(){
    this.showBill=true;
  }
  closeBill(){
    this.showBill=false;
  }
  openForm(item:Sales){
    this.showForm=true;
  this.saleId=item.saleId,
  this.medicineName=item.medicineName,
this.medicineQuantity=item.medicineQuantity,
this.price=item.price,
this.date=item.date,
     this.formHeader = "Edit Customer"
  }
  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.saleId=0;
    this.medicineName="";
    this.medicineQuantity=0;
    this.price=0;
   }
  saveSale(){
    this.showForm =false;
  
    let  body = {
     
  saleId: this.saleId,
  
medicineName:this.medicineName,
medicineQuantity:this.medicineQuantity,
price:this.price,
date:this.date

   }
   if(this.saleId){
    body['saleId'] =this.saleId;
    this.saleService.updateSale(body).subscribe(
      (res)=>{
        this.sales()
      },
    )
  }else
  this.saleService.postSale(body).subscribe(
        (res)=>{
          this.sales()
        },
      )
    
    this.ngOnInit();
    this.ngOnInit();
  }
 
  closeFormMed(){
    this.showFormMed=false;
  } 
 


  deleteData(item:Sales) {
    this.saleService.deleteSale(item.saleId).subscribe((resp) => {
      console.log(resp);
    });
    this.display();
    this.display();
  }


}
