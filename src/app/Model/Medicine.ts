export class Medicine{
    id!:number;
    name!:string;
    description!:string;
    dosage!:string;
    price!:number;
    manufacture_date!:Date;
    expiry_date!:Date;
    current_stock!:number

     constructor(id:number, name:string, description:string, dosage:string, price:number, manufacture_date:Date, expiry_date:Date, current_stock:number) {}
 }