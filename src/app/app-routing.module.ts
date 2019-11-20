import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { MenComponent } from "./components/men/men.component";
import { WomenComponent } from "./components/women/women.component";
import { AboutComponent } from "./components/about/about.component";
import { UnisexComponent } from "./components/unisex/unisex.component";
import { FragrancesComponent } from "./components/fragrances/fragrances.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "men", component: MenComponent },
  { path: "women", component: WomenComponent },
  { path: "unisex", component: UnisexComponent },
  { path: "about", component: AboutComponent },
  { path: "fragrances", component: FragrancesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
