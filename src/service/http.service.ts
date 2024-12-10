import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:4000/annoucements'

  constructor(private http: HttpClient) { }

  getAnnoucements() {
    return this.http.get(this.url);
  }
}
