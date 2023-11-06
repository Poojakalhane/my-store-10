import { Component, OnInit } from '@angular/core';
import { Sample } from './sample';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //ps. ProductService ==> ps = new ProductService()
  //here we r inject the instance of the Service class
  constructor( private ps: ProductService ){}
  title = 'my-store';

  colors = ["red","blue","green","yellow","pink","orange"];

  age=19


  ngOnInit(): void {
    //when we declare variables inside the method
    //we use let, var or const keyword

    //using the new keyword we r creating the object/instance 
    //of the sample class
    let s = new Sample();
    console.log(s.getMessage());
    console.log("from the service class:"+ this.ps.appName)
    console.log("sum=" +this.ps.add(6,7))
  }

  
}
