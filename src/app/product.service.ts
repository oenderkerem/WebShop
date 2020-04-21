import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./models/models";
import { map, filter, take } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("assets/products.json");
  }

  getProductByGender(category: string, gender: string): Observable<Product[]> {
    return this.getAllProducts();
  }

  getOilByGender(gender: string) {
    this.getAllProducts();
  }

  getFragranceByGender(gender: string) {
    this.getAllProducts();
  }
}
