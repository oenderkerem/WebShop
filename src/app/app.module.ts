import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationbarComponent } from "./components/navigationbar/navigationbar.component";
import { HamburgerIconComponent } from "./components/hamburger-icon/hamburger-icon.component";

import { StoreModule } from "@ngrx/store";
import { hamburgerReducer } from "./components/navigationbar/reducer/hamburger.reducer";
import { HomeComponent } from './components/home/home.component';
import { MenComponent } from './components/men/men.component';
import { WomenComponent } from './components/women/women.component';
import { UnisexComponent } from './components/unisex/unisex.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [AppComponent, NavigationbarComponent, HamburgerIconComponent, HomeComponent, MenComponent, WomenComponent, UnisexComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ hamburgerClicked: hamburgerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
