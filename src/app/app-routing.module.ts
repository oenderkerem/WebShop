import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MenComponent } from "./components/men/men.component";
import { WomenComponent } from "./components/women/women.component";
import { AboutComponent } from "./components/about/about.component";
import { UnisexComponent } from "./components/unisex/unisex.component";
import { FragrancesComponent } from "./components/fragrances/fragrances.component";
import { ProductComponent } from "./product/product/product.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: FragrancesComponent },
  { path: "men", component: MenComponent },
  { path: "women", component: WomenComponent },
  { path: "unisex", component: UnisexComponent },
  { path: "about", component: AboutComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
