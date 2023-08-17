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
    item: string;
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

export interface StateProps {
    productData: [];
    favoriteData: [];
    userInfo: null | string;
    next: any;
  }