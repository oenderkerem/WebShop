import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MenComponent } from "./components/men/men.component";
import { WomenComponent } from "./components/women/women.component";
import { AboutComponent } from "./components/about/about.component";
import { UnisexComponent } from "./components/unisex/unisex.component";
import { ProductComponent } from "./components/product/product/product.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { BasicShopComponent } from "./basic-shop/basic-shop.component";
import { ProductCategoryOverviewComponent } from "./product-category-overview/product-category-overview.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "shop", component: BasicShopComponent },
  { path: "product/:id", component: ProductComponent },
  {
    path: "men",
    component: MenComponent,
    children: [
      { path: "", component: ProductCategoryOverviewComponent },
      { path: "oil", component: ProductCategoryComponent },
      { path: "cologne", component: ProductCategoryComponent },
    ],
  },
  {
    path: "unisex",
    component: UnisexComponent,
    children: [
      { path: "", component: ProductCategoryOverviewComponent },
      { path: "oil", component: ProductCategoryComponent },
      { path: "cologne", component: ProductCategoryComponent },
    ],
  },
  {
    path: "women",
    component: WomenComponent,
    children: [
      { path: "", component: ProductCategoryOverviewComponent },
      { path: "oil", component: ProductCategoryComponent },
      { path: "cologne", component: ProductCategoryComponent },
    ],
  },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
