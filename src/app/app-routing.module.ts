import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MenComponent } from "./components/men/men.component";
import { WomenComponent } from "./components/women/women.component";
import { AboutComponent } from "./components/about/about.component";
import { UnisexComponent } from "./components/unisex/unisex.component";
import { ProductComponent } from "./components/product/product/product.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { BasicShopComponent } from "./components/basic-shop/basic-shop.component";
import { ProductCategoryOverviewComponent } from "./product-category-overview/product-category-overview.component";
import { CartComponent } from "./components/cart/cart.component";
import { ShelfComponent } from "./components/shelf/shelf.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "shop", component: BasicShopComponent },
  {
    path: "shop/:gender",
    component: ProductCategoryOverviewComponent,
  },
  { path: "shop/:gender/:category", component: ProductCategoryComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "about", component: AboutComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
