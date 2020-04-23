import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./models/models";
import { Observable } from "rxjs";
import { State } from "./app.component";
import { Store } from "@ngrx/store";
import { AddProducts } from "./actions/actions";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient, private store: Store<State>) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/products.json");
  }

  getProductsByCategoryAndGender(
    category: string,
    gender: string
  ): Observable<Product[]> {
    let observables = this.getAllProducts();
    this.addProductsToStore(observables);
    return observables;
  }

  getOilByGender(gender: string): Observable<Product[]> {
    let observables = this.getAllProducts();
    this.addProductsToStore(observables);
    return observables;
  }

  getFragranceByGender(gender: string): Observable<Product[]> {
    let observables = this.getAllProducts();
    this.addProductsToStore(observables);
    return observables;
  }

  addProductsToStore(products: Observable<Product[]>) {
    if (products) {
      products.subscribe((data) => this.store.dispatch(new AddProducts(data)));
    }
  }
}
