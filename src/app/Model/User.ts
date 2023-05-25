// export class User{
   
//    id!:number
//     firstName!:string;
//     lastName!:string;
//     contact!:string;
//     medicineName!:string;
//     price!:number;
//     constructor(firstName:string,lastName:string,medicineName:string,price:number,contact:string){}
    
//  }

export class User{
   id!:number;
    firstName!:string;
    lastName!:string;
    email!:string;
    contact!:number;
    dob!:Date;

    

     constructor(id:number,firstName:string,lastName:string,email:string,contact:number, dob:Date){}
}