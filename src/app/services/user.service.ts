import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private url = "localhost";

  constructor(private http: HttpClient) {}

  getUser() {
    return {
      id: "1",
      name: "Lashan",
      semester: "Spring"
    };
  }
}
