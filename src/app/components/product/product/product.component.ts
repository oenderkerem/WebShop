import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State } from "src/app/app.component";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Product, ProductVariant } from "src/app/models/models";
import { Location } from "@angular/common";
import { AddShoppingCartEntries } from "src/app/actions/actions";
import { ProductService } from "src/app/product.service";

export type ProductParameter = {
  product: Product;
  category: string;
};

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private _location: Location,
    private productService: ProductService
  ) {}

  product: Product;
  variants: ProductVariant[] = [];
  selectedVariant: ProductVariant;
  messageBoxVisible = false;
  productParameter: ProductParameter;

  ngOnInit() {
    this.setParameter();
    this.setProduct();
    this.setProductVariants();
  }

  setParameter() {
    this.productParameter = history.state.data as ProductParameter;
    console.log("setParameter:");
    console.log(this.productParameter);
  }

  setProduct() {
    if (this.productParameter) {
      if (this.productParameter.product) {
        this.product = this.productParameter.product;
      }
    }
  }

  setProductVariants() {
    if (this.product) {
      if (this.productParameter) {
        if (this.productParameter.category) {
          this.productService
            .getProductVariantsByCategory(
              this.product.id,
              this.productParameter.category
            )
            .subscribe((variants) => (this.variants = variants));
        }
      }
    }
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
      this.messageBoxVisible = true;
    }
  }

  onVariationClick(id: string) {
    if (id != undefined) {
    }
  }

  closeMessageBox() {
    this.messageBoxVisible = false;
  }

  onMessageBoxCloseClicked() {
    this.closeMessageBox();
  }

  onMessageBoxLeftClicked() {
    this.store.dispatch({ type: "CART_OPEN" });
    this.closeMessageBox();
  }

  onMessageBoxRightClicked() {
    this.closeMessageBox();
  }
}
