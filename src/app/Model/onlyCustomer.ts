import { Medicine } from "./Medicine";

export class onlyCustomer{
   id!:number;
  firstName!:string;
  lastName!:string;
  contact!:number;
  //medicineName!:string;
  email!:string;
  medicineArray!: Medicine[];
  dob!:Date;


   // constructor(Id:number,firstName:string,lastName:string,contactNo:number,email:string,medicineArray:Medicine,dob:Date){
      
   // }
   constructor(Id: number, firstName: string, lastName: string, contactNo: number, email: string, medicine: Medicine, dob: Date) {
      // Assign the parameters to the corresponding class properties
      this.id = Id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.contact = contactNo;
      this.email = email;
      this.medicineArray = [medicine];
      this.dob = dob;
    }
    
}
