import { Component } from '@angular/core';
import { User } from 'src/app/Model/User';
import { CustomerService } from 'src/app/Services/Customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  customers!: any;

  Customer: User = new User(50, '', '', '', 0);
  constructor(private customerService: CustomerService) {}
  ngOnInit() {}
  display() {
    this.customers = this.customerService
      .getCustomers()
      .subscribe((data) => (this.customers = data));
    return this.customers;
  }
  // public addCustomer(){
  //   let resp=this.customerService.postMethod(this.Customer);
  //   resp.subscribe((data)=>
  //   this.customers=data);
  //  this.display();
  //  this.display();
  // }

  public addCustomer = async () => {
    let resp = await this.customerService.postMethod(this.Customer);
    resp.subscribe((data) => (this.customers = data));

    this.display();
    this.display();
  };
  deleteData(item: User) {
    this.customerService.deleteData(item.id).subscribe((resp) => {
      console.log(resp);
    });
    this.display();
    this.display();
  }

  updateCustomer(user: User) {
    this.customerService.updateData(user).subscribe((data) => {
      console.log(data);
    });
  }


    // public addCustomer(){
    //   let resp=this.customerService.postMethod(this.Customer);
    //   resp.subscribe((data)=>
    //   this.customers=data);
    //  this.display();
    //  this.display();
    // }



}
