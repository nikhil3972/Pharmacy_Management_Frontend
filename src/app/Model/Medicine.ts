export class Medicine{
    id!:number;
    medicineName!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufacture_date!:Date;
    expiry_date!:Date;
    current_stock!:number

     constructor(id:number, medicineName:string, description:string, dosage:string, price:number, manufacture_date:Date, expiry_date:Date, current_stock:number) {}
 }