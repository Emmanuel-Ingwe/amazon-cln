export interface ProductProps{
    brand:String;
    category:string;
    description:string;
    image:string;
    isNew:string;
    oldPrice:number;
    price:string;
    title:string;
    _id:number;
}

export interface StoreProduct {
    brand: string;
    category:string;
    description:string;
    image:string;
    isNew:string;
    oldPrice:number;
    price:string;
    title:string;
    _id:number;
    quantity: number;
}