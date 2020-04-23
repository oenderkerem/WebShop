import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
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
  basicReducer,
} from "./reducer";
import { ShelfComponent } from "./components/shelf/shelf.component";
import { LoadingSignComponent } from "./components/loading-sign/loading-sign.component";
import { ShelfItemComponent } from "./components/shelf/shelf-item/shelf-item.component";
import { CartItemComponent } from "./components/cart/cart-item/cart-item.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { DetailedVariationItemComponent } from "./components/product-details/detailed-variation-item/detailed-variation-item.component";
import { ShoppingCartIconComponent } from "./components/cart/shopping-cart-icon/shopping-cart-icon.component";
import { ProductImageBoxComponent } from "./components/product/product-image-box/product-image-box.component";
import { AccordeonComponent } from "./components/accordeon/accordeon.component";
import { ProductComponent } from "./components/product/product/product.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ProductOptionsComponent } from "./components/product/product-options/product-options.component";
import { MessageBoxComponent } from "./components/message-box/message-box.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { BasicShopComponent } from "./components/basic-shop/basic-shop.component";
import { ProductCategoryOverviewComponent } from "./product-category-overview/product-category-overview.component";
import { CheckoutComponent } from './components/checkout/checkout.component';

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
    DetailedVariationItemComponent,
    ShoppingCartIconComponent,
    ProductImageBoxComponent,
    AccordeonComponent,
    ProductComponent,
    ProductOptionsComponent,
    MessageBoxComponent,
    ProductCategoryComponent,
    BasicShopComponent,
    ProductCategoryOverviewComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({
      hamburgerReducer: hamburgerReducer,
      shoppingCartReducer: shoppingCartReducer,
      productsReducer: productsReducer,
      basicReducer: basicReducer,
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
