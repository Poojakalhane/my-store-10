import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private ps:ProductService){}

   cartCount = 0
   getCartCount(){
     this.cartCount = this.ps.cartCount
   }
   
  primaryTheme =true
  themeClass = {
    'bg-primary':true,
    'bg-purple':false,
    // 'bg-greenyellow':false
  }

  //function declaree inside the class will not have function keyword

  toggleTheme(){
    //to refer any class variable inside the method/function
    // we have refer it using this keyword
    this.themeClass ={
      // 'bg-primary':false,
      // 'bg-purple':true

      'bg-primary':!this.primaryTheme,
      'bg-purple':this.primaryTheme
    }
    this.primaryTheme =!this.primaryTheme
  }

  homePage(){
     console.log('home page link is cliked')
  }
}
//function declared outside the class should have function keyword
function somefunction(){

  alert('')
}