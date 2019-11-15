import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationbarComponent } from "./components/navigationbar/navigationbar.component";
import { HamburgerIconComponent } from "./components/hamburger-icon/hamburger-icon.component";

@NgModule({
  declarations: [AppComponent, NavigationbarComponent, HamburgerIconComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
