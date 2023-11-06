import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaceCharacterPipe } from './replace-character.pipe';
import { DiscountedPricePipe } from './discounted-price.pipe';
import { HighlightDirective } from './highlight.directive';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultComponent } from './calculator/result/result.component';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {path: "home", component: HomeComponent, title:"MyStore | Home"},
  {path: "products", component: ProductListComponent, title:"MyStore | Products"},
  {path: "calculator", component: CalculatorComponent,title:"MyStore | calculator"},
  {path: "profile", component: ProfileComponent,title:"MyStore | Profile"},
  {
    path: "products/:id",
    component:ProductDetailsComponent,
    title: "MyStore | Product Details",
    children:[
     {
      path:'review',
      component:ReviewComponent,
      title: "MyStore | Review"
    }
    ]
  },
  {path: "",redirectTo:"/Home", pathMatch:'full'},
  {path: "**", component: PagenotfoundComponent, title:"MyStore | PageNOtFound"}
  
]


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    ReplaceCharacterPipe,
    DiscountedPricePipe,
    HighlightDirective,
    CalculatorComponent,
    ResultComponent,
    HomeComponent,
    ProfileComponent,
    PagenotfoundComponent,
    ProductDetailsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
