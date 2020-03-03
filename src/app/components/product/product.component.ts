import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "src/app/models/models";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<State>, private route: ActivatedRoute) {}
  routeParameters: any;
  productId: string;
  product: Product;

  ngOnInit() {
    this.setProduct();
  }

  setProduct() {
    this.setRouteParameters();
    this.subscribeToParametersAndLoadProduct();
  }

  subscribeToParametersAndLoadProduct() {
    this.routeParameters.subscribe(params => {
      this.productId = params["id"];
      this.loadProductFromId();
    });
  }

  setRouteParameters() {
    this.routeParameters = this.route.params;
  }

  loadProductFromId() {
    this.store
      .select(state => state.productsReducer.Products)
      .subscribe(
        products =>
          (this.product = products.find(
            product => product.id === this.productId
          ))
      );
  }

  unsubscribeRouteParameters() {
    this.routeParameters.unsubscribe();
  }

  getProductIdFromRoute() {
    this.route.params.subscribe(params => {
      this.productId = params["id"];
    });
  }

  ngOnDestroy() {
    this.unsubscribeRouteParameters();
  }
}
