import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product, ProductCategory, ProductVariant } from "./models/models";
import { Observable } from "rxjs";
import { State } from "./app.component";
import { Store } from "@ngrx/store";
import { AddProducts } from "./actions/actions";
import { JsonAppConfigService } from "./json-app-config.service";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  apiUrl: string = "";

  constructor(
    private http: HttpClient,
    private store: Store<State>,
    private configService: JsonAppConfigService
  ) {
    this.apiUrl = configService.baseUrlApi;
  }

  //@RequestMapping("/products")
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "/products");
  }

  // @GetMapping("/product/{productId}")
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + "/product/" + id);
  }

  //products/gender/{ gender }
  getProductsByGender(gender: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "/products/gender/" + gender);
  }

  //@RequestMapping("/categories")
  getProductCategories(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.apiUrl + "/categories");
  }

  //@GetMapping("/images/{productId}")
  getProductImages(productId: string) {
    return this.http.get(this.apiUrl + "/images/" + productId);
  }

  //@GetMapping("/product/{productId}/variations")
  getProductVariations(productId: number) {
    return this.http.get(this.apiUrl + "/product/" + productId + "/variations");
  }

  ///product/{productId}/{category}/variations"
  getProductVariantsByCategory(
    id: number,
    category: string
  ): Observable<ProductVariant[]> {
    return this.http.get<ProductVariant[]>(
      this.apiUrl + "/product/" + id + "/" + category + "/variations"
    );
  }

  //"/products/{category}/gender/{gender}"
  getProductsByCategoryAndGender(
    gender: string,
    category: string
  ): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.apiUrl + "/products/" + category + "/gender/" + gender
    );
  }

  //product/{id}/category/{category}/minprice
  getMinimalPriceOfProductVariationInCategory(
    productId: number,
    category: String
  ): Observable<number> {
    return this.http.get<number>(
      this.apiUrl +
        "/product/" +
        productId +
        "/category/" +
        category +
        "/minprice"
    );
  }
}
