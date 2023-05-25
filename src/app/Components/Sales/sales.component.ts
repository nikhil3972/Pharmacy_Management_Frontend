import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/Model/Sales';
import { User } from 'src/app/Model/User';
import { CustomerService } from 'src/app/Services/Customer/customer.service';
import { MedicineService } from 'src/app/Services/Medicine/medicine.service';
import { SalesService } from 'src/app/Services/Sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{
  sales!:any;
  customers!: any;
totalSale!:number;
totalPrice!:any;
  sale:Sales =new Sales(0,"","",0);
  Customer: User = new User(0,"","","",0, new Date("Fri Dec 08 2019 "));
  medicine!: any;
  medicineName!:string;
  price!:number;


  constructor(private service:SalesService,private customerService:CustomerService,private medicineService:MedicineService){}



  ngOnInit() {
   
    this.displayMedicine();
    this.display();
    this.display();
    
  }

  display(){
    this.customers = this.customerService.getCustomers().subscribe((data) => this.customers = data);
     return this.customers;
     
  }
 displayMedicine(){
  this.medicine = this.medicineService.getMedicine().subscribe((data) => this.medicine = data);
  return this.medicine;
 }
  displayCost(){
    this.totalPrice = this.customerService.getCost().subscribe((data) => this.totalPrice = data);
     return this.totalPrice;
  }
  // displaySales(){
  //   this.sales=this.service.getSales().subscribe(data=>
  //     this.sales=data);
  //     return this.sales;
  // }


  // public calculateCost = async () =>{

  //   let resp = await this.customerService.postCost(this.customers);
  //    resp.subscribe((data) => (this.customers = data));
  //    alert(resp.toString());

  //  }


  deleteRecord(id:number){
    this.customerService.deleteData(id).subscribe(
      (resp)=>{
        console.log(resp);
      }
    )
    this.display();
  }

  // addSales(){
  //   let resp = this.service.postMethod(this.sale);
  //   resp.subscribe((data) => (this.sales = data));

  //   this.displaySales();
  //   this.displaySales();
  // }

  // updateSales(user: Sales) {
  //   this.service.updateData(user).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
