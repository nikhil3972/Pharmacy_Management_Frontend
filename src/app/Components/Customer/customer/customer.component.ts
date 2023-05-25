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
  arrayMedicine!: Medicine[];

  customerMedicine !: any;
medicineArray:Medicine[] = [{
  "id":3,
  "medicineName" : "xyzabs",
  "description" : "This is vicks",
  "dosage" : "Viral", 
  "price" : 16.34,
  "manufactureDate" : new Date(),
  "expiryDate" : new Date(),
  "currentStock" : 70,
  "customerId":2
}
];
  searchTerm!: string;
  users!: any[];

  totalPrice!:number;

  Customerr: User = new User(0,"","","",0, new Date("Fri Dec 08 2019 "));
  


  // Customer: onlyCustomer = new onlyCustomer(0,"","",0,"",,new Date("Fri Dec 08 2019 "));

  // Medicine: Medicine = new Medicine(0, "", "", "", 0, new Date("Fri Dec 08 2019 "), new Date("Fri Dec 08 2019 "), 0);


  // CustomerMedicine: CustomerMedicine = new CustomerMedicine(0, "", "", "", "", "", 10.05);

  constructor(public customerService: CustomerService, public medicineService: MedicineService,public costService:CostService) { }


  showForm= false;
  showBill=false;
  showFormMed=false;
  id!:number;
    firstName!:string;
    lastName!:string;
    medicineName!:string;
    price!:number;
    contact!:number;
  emails!:string;
  dob!:Date;

medId!:number;

medicineData!:any;

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


  public addCustomer = async () => {
    let resp = await this.customerService.postMethod(this.Customerr);
    resp.subscribe((data) => (this.customers = data));
    this.costService.items.push(this.customers);
  }
  openBill(){
    this.showBill=true;
  }
  closeBill(){
    this.showBill=false;
  }
  openForm(item:onlyCustomer){
    this.showForm=true;
      this.firstName=item.firstName;
      this.lastName=item.lastName,
      // this.medicineName=item.medicineName,
      // this.price=item.price,
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
      this.contact=0
  }
  saveCustomer(){
    this.showForm =false;
    console.log('medicineArray:', this.medicineArray);
    let  body = {
      firstName:this.firstName,
      lastName:this.lastName,
      
      contact:this.contact,
      emails:this.emails,
    arrayMedicine:this.arrayMedicine.push(this.medicineData),
      dob:this.dob,
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
  }
  getMedicines(id:number){
    this.formHeader="Medicine List"
    this.showFormMed=true;
    this.medicine = this.medicineService.getMedicineById(id).subscribe((data) => this.medicine = data);
     return this.medicine;
  }
  closeFormMed(){
    this.showFormMed=false;
  } 
 
getMedicineById(medId:number){
  this.medicineData = this.medicineService.getMedicineById(medId).subscribe((data) => this.medicineData = data);
  return this.medicineData;
}

  deleteData(item: onlyCustomer) {
    this.customerService.deleteData(item.id).subscribe((resp) => {
      console.log(resp);
    });
    this.display();
    this.display();
  }

  addMedicineCustomer(){

  }




}
