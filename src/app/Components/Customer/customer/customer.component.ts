import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomerMedicine } from 'src/app/Model/CustomerMedicine';
import { Medicine } from 'src/app/Model/Medicine';
import { User } from 'src/app/Model/User';
import {onlyCustomer} from 'src/app/Model/onlyCustomer'
import { CustomerService } from 'src/app/Services/Customer/customer.service';
import { MedicineService } from 'src/app/Services/Medicine/medicine.service';
import { CostService } from 'src/app/Services/cost.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  formHeader ="Edit Customer details";

  bCus: boolean = true;
  bMed: boolean = false;

  customers!: any;
  medicine!: any;
  searchId!: number;

  customerMedicine !: any;

  searchTerm!: string;
  users!: any[];

  totalPrice!:number;
  
  Customerr: User = new User("","","",0,"");


  Customer: onlyCustomer = new onlyCustomer(0,"","",0,"",0);

  // Medicine: Medicine = new Medicine(0, "", "", "", 0, new Date("Fri Dec 08 2019 "), new Date("Fri Dec 08 2019 "), 0);


  // CustomerMedicine: CustomerMedicine = new CustomerMedicine(0, "", "", "", "", "", 10.05);

  constructor(public customerService: CustomerService, public medicineService: MedicineService,public costService:CostService) { }


  showForm= false;
  id!:number;
    firstName!:string;
    lastName!:string;
    medicineName!:string;
    price!:number;
    contact!:string
 



  ngOnInit() {
    this.display();
    this.display();
  }

  calculatePrice(){
  for(let i=0;i<this.customers.length;i++){
    this.totalPrice += this.customers[i].price;
  }
  // return this.totalPrice;

}

  display(){
    this.customers = this.customerService.getCustomers().subscribe((data) => this.customers = data);
     return this.customers;
  }

 public calculateCost = async () =>{
  // let resp = await this.customerService.postCost(this.customers);
  // resp.subscribe((data) => (this.customers = data));
  let resp = await this.customerService.postCost(this.customers);
   resp.subscribe((data) => (this.customers = data));

 }

//  getPrice(){
//   let resp= await this.customerService.
//  }
  public addCustomer = async () => {
    let resp = await this.customerService.postMethod(this.Customerr);
    resp.subscribe((data) => (this.customers = data));
    this.costService.items.push(this.customers);
  }
  openForm(item:onlyCustomer){
    this.showForm=true;
      this.firstName=item.firstName;
      this.lastName=item.lastName,
      this.medicineName=item.medicineName,
      this.price=item.price,
      this.contact=item.contact,
      this.id =item.id;
      this.formHeader = "Edit Customer"
  }
  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.firstName="";
      this.lastName="",
      this.medicineName="",
      this.price=0,
      this.contact=""
  }
  saveCustomer(){
    this.showForm =false;
    let  body = {
      firstName:this.firstName,
      lastName:this.lastName,
      price:this.price,
      medicineName:this.medicineName,
      contact:this.contact,
      id:this.id
    }
    if(this.id){
      body['id'] =this.id;
      this.customerService.putCustomer(body).subscribe(
        (res)=>{
          this.customers()
        },
      )
    }else{
      this.customerService.postMethod(body).subscribe(
        (res)=>{
          this.customers()
        },
      )
    }
    this.ngOnInit();
    this.ngOnInit();
    this.ngOnInit();
   this.ngOnInit();

  }


  // public addCustomer = async () => {
  //   let resp = await this.customerService.postMethod(this.Customer);
  //   resp.subscribe((data) => (this.customers = data));

  //   this.display();
  //   this.display();
  // };



 

  // public getCustomerById(searchId: number) {
  //   this.customerService.deleteData(searchId).subscribe((resp) => {
  //     console.log(resp);
  //   });
  //   this.display();
  //   this.display();
  // }

  // public addCustomer = async () => {
  //   this.bCus = false;
  // };
  deleteData(item: onlyCustomer) {
    this.customerService.deleteData(item.id).subscribe((resp) => {
      console.log(resp);
    });
    this.display();
    this.display();
  }



  // public getMedicineData() {
  //   this.medicine = this.medicineService.getMedicine().subscribe((data) => (this.medicine = data));
  // }

  // public addMedicine = async () => {
  //   this.bCus = false;
  //   let resp = await this.medicineService.postMedicine(this.Medicine);
  //   resp.subscribe((data) => (this.customers = data));

  //   this.display();
  //   this.display();
  // };



}
