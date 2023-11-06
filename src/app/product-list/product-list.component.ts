import { Component, OnInit} from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private ps:ProductService){}
 
  
  errorMessage = null
  
  ngOnInit(): void{
     this.ps.getProducts().subscribe({next: val => {
      this.products = val
      this.filteredProducts = val
    },
    error: err =>
    {
      // console.log(err)
      this.errorMessage = err
    }
  })
  }
  showImage = true
  
  // print(event: any){
  //   this.filterBy=(event.target).value
  //   console.log(this.filterBy)
  // }

  name="product-list component"

  altText ="Image does not exist";
  titleText = "click to add to cart"

  imgStyle ={
    'width.px': 200,
    'height.px':200
  }

  nameStyle = {
    'fontSize.px':30,
    'fontStyle':'italic',
    'color':'blue',
    'fontVarient':'small-caps'
  }

  priceStyle ={
    'fontWeight': 'bold'
  }

  customClass = {
    'custom-style1':true,
    'custom-style2':false

  }

  // addToCart(p: any, value: number)
  addToCart( event: MouseEvent,p: any, value?: number)                   {//any means any datatype
    // console.log('added to cart:' + p.name + "\nwith price:"+p.price)
    // console.log("value:"+ value)
    // console.log(event.x)

    this.ps.increament()
  }

  searching(event: any){
    console.log("The letter typed:"+ (event.target).value)
  }


  // product ={
  //   id:1,
  //   name:"one plus",
  //   price:40000,
  //   discription:"phone"
  // }

  //creating the array/ list of products

   products: Product[] = []
  
  filteredProducts = this.products

  filterProduct(searchValue: string){
    // console.log("filterProduct")
    // console.log(searchValue)
    this.filteredProducts = this.products.filter(p => p.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }
  
  private _filterBy = ''


  //we will not bind _filterBy with the ngModel
  //we will bind filterBy method name with the ngModel

  //used to set read the value of the _filtereBy variable
  get filterBy(): string{
    // console.log('getter')
      return this._filterBy
  }


  //used to set/change the value of the _filterBy variable
  //with the input value
 
  set filterBy(value:string){
    // console.log('setter')
    this._filterBy = value
    this.filterProduct(this._filterBy)
  }
}
