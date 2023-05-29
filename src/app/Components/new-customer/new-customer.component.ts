import { Component } from '@angular/core';
import { NewCustomer } from 'src/app/Model/NewCustomer';
import { NewCustomerService } from 'src/app/Services/NewCustomer/new-customer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent {

  formHeader ="Edit Customer details";
  bCus: boolean = true;
  bMed: boolean = false;
  customers!: any;
  totalPrice!:number;
  customerForm!: FormGroup;
  submitted= false;

Customer:NewCustomer= new NewCustomer(0,"","",new Date("Fri Dec 08 2019 "),0,"",0,0);

constructor(public customerService:NewCustomerService, private formBuilder:FormBuilder) { }
customerId!:number;
customerName!:string;
contact!:string;
buyingDate!:Date;
medicineId!:number;
medicineName!:String;
quantity!:number;
 price!:number;


 showForm= false;
 showBill=false;
 showFormMed=false;

  ngOnInit() {
    this.customerForm= this.formBuilder.group({
      customerId:['',Validators.required],
      customerName:['',Validators.required],
      contact:['',Validators.required],
      buyingDate:['',Validators.required],
      medicineId:['',Validators.required],
      medicineName:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required]
    })

    this.display();
    this.display();
  }

  display(){
    this.customers = this.customerService.getCustomer().subscribe((data) => this.customers = data);
     return this.customers;
  }

public addCustomer = async () => {
  this.submitted=true;
  if (this.Customer.customerId <= 0) {
    alert("Customer Id cannot be negative or 0");
    return;
  }
  else if(this.Customer.customerName.trim() === ''){
    alert("Customer Name cannnot be blank");
    return;
  }
  else if (this.Customer.contact.trim()==='') {
    alert("Contact cannot be blank");
    return;
  }
  else if (this.Customer.price <= 0) {
    alert("Price cannot be negative or 0");
    return;
  }
  else if (this.Customer.quantity <= 0) {
    alert("Quantity cannot be negative or 0");
    return;
  }
  else if (this.Customer.medicineId <= 0) {
    alert("Medicine Id cannot be negative or 0");
    return;
  }
  else if(this.Customer.medicineName.trim() === ''){
    alert("Medicine Name cannnot be blank");
    return;
  }
  else if (!this.customerForm.invalid) {
    let resp = await this.customerService.postCustomer(this.Customer);
    resp.subscribe((data: any) => (this.customers = data));
  }
  else{
    return;
  }

}

  openBill(){
    this.showBill=true;
  }
  closeBill(){
    this.showBill=false;
  }
  openForm(item:NewCustomer){
    this.showForm=true;
   this.customerId=item.customerId,
   this.customerName=item.customerName,
this.contact=item.contact,
this.buyingDate=item.buyingDate,
this.medicineName=item.medicineName,
this.medicineId=item.medicineId,
this.quantity=item.quantity,
this.price=item.price
     this.formHeader = "Edit Customer"
  }
  closeForm(){
    this.showForm=false;
    this.clearForm();
  }
  clearForm(){
    this.customerId=0;
    this.customerName="";
    this.contact="";
    this.medicineId=0;
    this.medicineName="";
    this.quantity=0;
    this.price=0;
  
  
  }
  saveCustomer(){
    this.showForm =false;
  
    let  body = {
     
   customerId: this.customerId,
  customerName:this.customerName,
  medicineId:this.medicineName,
medicineName:this.medicineName,
quantity:this.quantity,
price:this.price,
buyingDate:this.buyingDate,

   }
   if(this.customerId){
    body['customerId'] =this.customerId;
    this.customerService.putCustomer(this.customerId).subscribe(
      (res)=>{
        this.customers()
      },
    )
  }else
  this.customerService.postCustomer(body).subscribe(
        (res)=>{
          this.customers()
        },
      )
    
    this.ngOnInit();
    this.ngOnInit();
  }
 
  closeFormMed(){
    this.showFormMed=false;
  } 
 


  deleteData(item:NewCustomer) {
    this.customerService.deleteCustomer(item.customerId).subscribe((resp) => {
      console.log(resp);
    });
    this.display();
    this.display();
  }






}
