import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Product, ProductVariant } from "src/app/models/models";
import { Location } from "@angular/common";
import { AddShoppingCartEntries } from "src/app/actions/actions";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  routeParameters: any;
  productId: string;
  product: Product;

  selectedVariant: ProductVariant;

  ngOnInit() {
    this.setProduct();
  }

  setProduct() {
    this.setRouteParameters();
    this.subscribeToParametersAndLoadProduct();
  }

  subscribeToParametersAndLoadProduct() {
    this.routeParameters.subscribe((params) => {
      this.productId = params["id"];
      this.loadProductFromId();
    });
  }

  setRouteParameters() {
    this.routeParameters = this.route.params;
  }

  loadProductFromId() {
    this.store
      .select((state) => state.productsReducer.Products)
      .subscribe(
        (products) =>
          (this.product = products.find(
            (product) => product.id === this.productId
          ))
      );
  }

  unsubscribeRouteParameters() {
    this.routeParameters.unsubscribe();
  }

  getProductIdFromRoute() {
    this.route.params.subscribe((params) => {
      this.productId = params["id"];
    });
  }

  ngOnDestroy() {
    this.unsubscribeRouteParameters();
  }

  onBackButtonClick() {
    this._location.back();
  }

  onCartButtonClick() {
    if (this.selectedVariant) {
      this.store.dispatch(
        new AddShoppingCartEntries([
          {
            product: this.product,
            variation: this.selectedVariant,
            amount: 1,
          },
        ])
      );
      alert("In Warenkorb hinzugefügt");
    }
  }

  onVariationClick(id: string) {
    if (id != undefined) {
      if (this.product) {
        if (this.product.variations) {
          let index = this.product.variations.findIndex(
            (variation) => variation.id === id
          );
          if (index > -1) {
            let productVariant = this.product.variations[index];
            if (this.selectedVariant === productVariant) {
              this.selectedVariant = undefined;
            } else {
              this.selectedVariant = productVariant;
            }
          }
        }
      }
    }
  }
}
