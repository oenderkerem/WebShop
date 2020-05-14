import { Injectable } from "@angular/core";
import { AppConfig } from "src/config/app-config";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class JsonAppConfigService extends AppConfig {
  constructor(private http: HttpClient) {
    super();
  }

  load() {
    return this.http
      .get<AppConfig>("assets/app.config.json")
      .toPromise()
      .then((data) => {
        this.baseUrlApi = data.baseUrlApi;
      })
      .catch(() => {
        this.baseUrlApi = "http://localhost:8080";
      });
  }
}
