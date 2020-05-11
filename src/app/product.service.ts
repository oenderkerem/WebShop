import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product, ProductCategory } from "./models/models";
import { Observable } from "rxjs";
import { State } from "./app.component";
import { Store } from "@ngrx/store";
import { AddProducts } from "./actions/actions";

const apiUrl: string = "https://api.e99esans.de";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient, private store: Store<State>) {}

  //@RequestMapping("/products")
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl + "/products");
  }

  //products/gender/{ gender }
  getProductsByGender(gender: string): Observable<Product[]> {
    let observables = this.http.get<Product[]>(
      apiUrl + "/products/gender/" + gender
    );
    this.addProductsToStore(observables);
    return observables;
  }

  //@RequestMapping("/categories")
  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(apiUrl + "/categories");
  }

  // @GetMapping("/product/{productId}")
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(apiUrl + "/product/" + id);
  }

  //@GetMapping("/images/{productId}")
  getProductImages(productId: string) {
    return this.http.get(apiUrl + "/images/" + productId);
  }

  //@GetMapping("/product/{productId}/variations")
  getProductVariations(productId) {
    return this.http.get(apiUrl + "/product/" + productId + "/variations");
  }

  //"/products/{category}/gender/{gender}"
  getProductsByCategoryAndGender(
    gender: string,
    category: string
  ): Observable<Product[]> {
    console.log("getProductsByCategoryAndGender called");
    console.log("category: " + category);
    console.log("gender " + gender);
    let observables = this.http.get<Product[]>(
      apiUrl + "/products/" + category + "/gender/" + gender
    );
    this.http
      .get(apiUrl + "/products/" + category + "/gender/" + gender)
      .toPromise()
      .then((data) => console.log(data));
    observables.toPromise().then(() => this.addProductsToStore(observables));
    return observables;
  }

  addProductsToStore(products: Observable<Product[]>) {
    if (products) {
      products.subscribe((data) => this.store.dispatch(new AddProducts(data)));
    }
  }
}
