// export class Product{
//           id: number = 0;
//           name: string ="";
//           price: number = 0;
//           image: string ="";
//           discription?: string ="";
// }

//in interface dont give declaration but in class its compulsory to give declaration

export interface Product{
    id: number,
    name: string,
    price: number,
    image: string,
    discription?: string,
    publishedDate:string,
    code: string,
    discount: number
}
