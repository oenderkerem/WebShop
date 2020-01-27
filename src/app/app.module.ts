import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent, State } from "./app.component";
import { NavigationbarComponent } from "./components/navigationbar/navigationbar.component";
import { HamburgerIconComponent } from "./components/hamburger-icon/hamburger-icon.component";

import { StoreModule } from "@ngrx/store";
import { HomeComponent } from "./components/home/home.component";
import { MenComponent } from "./components/men/men.component";
import { WomenComponent } from "./components/women/women.component";
import { UnisexComponent } from "./components/unisex/unisex.component";
import { AboutComponent } from "./components/about/about.component";
import { FragrancesComponent } from "./components/fragrances/fragrances.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { CustomerCommentComponent } from "./components/customer-comment/customer-comment.component";
import { SocialMediaIconLinkComponent } from "./components/social-media-icon-link/social-media-icon-link.component";
import { CustomerCommentsComponent } from "./components/customer-comments/customer-comments.component";
import { CartComponent } from "./components/cart/cart.component";
import {
  hamburgerReducer,
  shoppingCartReducer,
  productsReducer,
  basicReducer
} from "./reducer";
import { ShelfComponent } from "./components/shelf/shelf.component";
import { LoadingSignComponent } from "./components/loading-sign/loading-sign.component";
import { ShelfItemComponent } from "./components/shelf-item/shelf-item.component";
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { DetailedVariationItemComponent } from "./components/product-details/detailed-variation-item/detailed-variation-item.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    HamburgerIconComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    UnisexComponent,
    AboutComponent,
    FragrancesComponent,
    FooterComponent,
    CustomerCommentComponent,
    SocialMediaIconLinkComponent,
    CustomerCommentsComponent,
    CartComponent,
    ShelfComponent,
    LoadingSignComponent,
    ShelfItemComponent,
    CartItemComponent,
    ProductDetailsComponent,
    DetailedVariationItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      hamburgerReducer: hamburgerReducer,
      shoppingCartReducer: shoppingCartReducer,
      productsReducer: productsReducer,
      basicReducer: basicReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
