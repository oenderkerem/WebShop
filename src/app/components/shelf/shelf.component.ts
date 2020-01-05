import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { State } from "src/app/app.component";
import { Store } from "@ngrx/store";
import { AddShoppingCartEntry } from "src/app/actions/actions";
import {
  Product,
  ProductVariant,
  ShoppingCartEntry
} from "src/app/models/models";

@Component({
  selector: "app-shelf",
  templateUrl: "./shelf.component.html",
  styleUrls: ["./shelf.component.css"]
})
export class ShelfComponent implements OnInit {
  @Input() products: Observable<Product[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  async onAddToCartButtonClicked(product: Product, variant: ProductVariant) {
    this.store.dispatch({ type: "SET_LOADING" });
    console.log("loading set");
    if (this.isSeclectionValid(product, variant)) {
      console.log("awaiting now");
      await this.addProductToCart(product, variant);
      console.log("await finished");
    } else {
      //show message
    }
    this.store.dispatch({ type: "UNSET_LOADING" });
    console.log("loading unsetted");
    //if variation was selected add product/variation to cart

    /*
    this.store.dispatch({ type: "SET_LOADING" });
    this.addProductToCart(product, variant)
      .then(() => {
        console.log("Der Artikel wurde in den Warenkorb gelegt");
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => this.store.dispatch({ type: "UNSET_LOADING" }));
      */
  }

  isSeclectionValid(product: Product, variant: ProductVariant): boolean {
    console.log(product);
    console.log(variant);
    if (!product) {
      return false;
    }
    if (product.variations.length > 0 && variant === undefined) {
      return false;
    } else if (
      product.variations === undefined ||
      product.variations.length === 0
    ) {
      return true;
    }
    return true;
  }

  async addProductToCart(product: Product, variant: ProductVariant) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 2000);
    });

    await promise; // wait until the promise resolves (*)

    /*
    return new Promise((resolve, reject) => {
      try {
        let entry = this.isProductInCart(product, variant);
        if (entry) {
          this.store.dispatch(
            new AddShoppingCartEntry({
              product: product,
              variation: variant,
              amount: entry.amount + 1
            })
          );
        } else {
          this.store.dispatch(
            new AddShoppingCartEntry({
              product: product,
              variation: variant,
              amount: 1
            })
          );
        }
        resolve();
      } catch {
        reject("Der Artikel konnte nicht in den Warenkorb gelegt werden");
      }
    });
    */
  }

  isProductInCart(
    product: Product,
    variant: ProductVariant
  ): ShoppingCartEntry {
    let entries = this.store.select(state => state.shoppingCartReducer.Entries);
    entries.subscribe(data => {
      let shoppingCartEntries = data as ShoppingCartEntry[];
      if (
        shoppingCartEntries.findIndex(
          entry => entry.product === product && entry.variation === variant
        ) !== -1
      ) {
        console.log("Element " + product.id + " is in Cart");
      } else {
        console.log("Element " + product.id + " is not in cart");
      }
    });
    return {
      product: product,
      variation: variant,
      amount: 1
    };
  }
}
