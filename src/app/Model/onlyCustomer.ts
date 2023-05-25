import { Medicine } from "./Medicine";

export class onlyCustomer{
   id!:number;
  firstName!:string;
  lastName!:string;
  contact!:number;
  //medicineName!:string;
  email!:string;
  medicine!: Medicine[];
  dob!:Date;


   constructor(Id:number,firstName:string,lastName:string,contactNo:number,email:string,medicine:Medicine,dob:Date){}
}
