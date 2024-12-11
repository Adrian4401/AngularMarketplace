import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Annoucement {
  title: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private serverUrl = 'http://localhost:4000';

  private loginUrl = `${this.serverUrl}/login`;
  private getAnnoucementsUrl = `${this.serverUrl}/annoucements`;
  private getAnnoucementDetailsUrl = `${this.serverUrl}/annoucement/`;
  private postAnnoucementUrl = `${this.serverUrl}/annoucement-add/`;

  constructor(private http: HttpClient) { }

  onLogin() {
    return this.http.post(this.loginUrl, {});
  }

  getAnnoucements() {
    return this.http.get(this.getAnnoucementsUrl);
  }

  getAnnoucementDetails(id: string) {
    return this.http.get(`${this.getAnnoucementDetailsUrl}${id}`)
  }

  postAnnoucement(annoucement: Annoucement): Observable<any> {
    return this.http.post(`${this.postAnnoucementUrl}`, annoucement)
  }
}
