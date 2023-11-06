import { Injectable } from '@angular/core';
import { Observable, catchError, from, of, range, throwError } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 

  appName='my-store'


  add(a:number,b:number):number{
    return a+b;
  }
  cartCount = 0
  increament(){
    this.cartCount ++;
    console.log(this.cartCount)
  }




  //////////////////   RxJS  ///////////////////////

  values$ = of(1,2,3,"hello",[1,2,3])
  colors=["red","yellow","pink","orange"]
  colors$ = from(this.colors)
  range$ = range(1,10)

  //custom observable
  myObservable$ = new Observable(observe =>{
    observe.next(10)
    observe.next(20)
    observe.next(30)
    observe.complete()
    
    observe.next('observable')
    observe.next(true)
  })
  constructor(private http:HttpClient) {
  //  this.values$.subscribe(val => console.log("value:" + val))
  //  this.colors$.subscribe( c => console.log(c))
  //  this.range$.subscribe( r =>console.log(r))
  // this.myObservable$.subscribe(val => console.log("1:"+ val))
  // this.myObservable$.subscribe(val => console.log("2:"+ val))

  //to capture the complete stage of the observable
  this.myObservable$.subscribe({
    next: val => console.log(val),
    complete: ()=>console.log("observale complete")
  })
   }
   //this function is used to get all the products from json server
   getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products ")
                                   .pipe(catchError(this.handleError))

   }

   //this function is used to get single/individual products from json server

   getProductsById(id : number): Observable<Product>{
    return this.http.get<Product>("http://localhost:3000/products/"+id)
                                   .pipe(catchError(this.handleError))

   }                               
   handleError(error:HttpErrorResponse){
    console.log('error handler')
    return throwError(() => 'some error occured at server')
   }
}
