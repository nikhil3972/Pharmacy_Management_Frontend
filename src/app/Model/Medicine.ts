export class Medicine{
    id!:number;
    medicineName!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufactureDate!:Date;
    expiryDate!:Date;
    currentStock!:number;
    customerId!:number;

     constructor(id:number, medicineName:string, description:string, dosage:string, price:number, manufactureDate:Date, expiryDate:Date, currentStock:number,customerId:number) {}
 }