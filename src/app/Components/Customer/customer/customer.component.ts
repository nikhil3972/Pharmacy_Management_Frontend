import { Component } from '@angular/core';
import { CustomerMedicine } from 'src/app/Model/CustomerMedicine';
import { Medicine } from 'src/app/Model/Medicine';
import { User } from 'src/app/Model/User';
import { CustomerService } from 'src/app/Services/Customer/customer.service';
import { MedicineService } from 'src/app/Services/Medicine/medicine.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {

  

  bCus: boolean = true;
  bMed: boolean = false;

  customers!: any;
  medicine!: any;
  searchId!: number;

  customerMedicine !: any;

  searchTerm!: string;
  users!: any[];

  Customer: User = new User(0, 50, '', '', '', 0);
  Medicine: Medicine = new Medicine(0, "", "", "", 0, new Date("Fri Dec 08 2019 "), new Date("Fri Dec 08 2019 "), 0);

  CustomerMedicine: CustomerMedicine = new CustomerMedicine(0, "", "", "", "", "", 10.05);
  constructor(private customerService: CustomerService, private medicineService: MedicineService) { }


  ngOnInit() { }
  display() {
    // this.customers = this.customerService
    //   .getCustomers()
    //   .subscribe((data) => (this.customers = data));     
    // return this.customers;

    this.customerMedicine = this.customerService.getCustomerWithMedicine().subscribe((data) => this.customerMedicine = data);
    return this.customerMedicine;

  }

  public addCustomerWithMedicine = async () => {
    let resp = await this.customerService.postCustomerWithMedicine(this.CustomerMedicine);
    resp.subscribe((data) => (this.customerMedicine = data));
    this.display();
    this.display();
  };

  public getCustomerById(searchId: number) {
    this.customerService.deleteData(searchId).subscribe((resp) => {
      console.log(resp);
    });
    this.display();
    this.display();
  }

  public addCustomer = async () => {
    this.bCus = false;
    // let resp = await this.customerService.postMethod(this.Customer);
    // resp.subscribe((data) => (this.customers = data));
    // this.display();
    // this.display();
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



  public getMedicineData() {
    this.medicine = this.medicineService.getMedicine().subscribe((data) => (this.medicine = data));
  }

  public addMedicine = async () => {
    this.bCus = false;
    let resp = await this.medicineService.postMethod(this.Medicine);
    resp.subscribe((data) => (this.customers = data));
    // this.display();
    // this.display();
  };



}
