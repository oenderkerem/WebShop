import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationbarComponent } from "./components/navigationbar/navigationbar.component";
import { HamburgerIconComponent } from "./components/hamburger-icon/hamburger-icon.component";

import { StoreModule } from "@ngrx/store";
import { hamburgerReducer } from "./components/navigationbar/reducer/hamburger.reducer";

@NgModule({
  declarations: [AppComponent, NavigationbarComponent, HamburgerIconComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ hamburgerClicked: hamburgerReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
