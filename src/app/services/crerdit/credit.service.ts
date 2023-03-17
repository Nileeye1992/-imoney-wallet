import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credit } from './crerdit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  url: string = environment.apiUrl;
  constructor(protected http: HttpClient) { }

  public getCreditByUserName(username: string): Observable<{ code: number, result: Credit }> {
    return this.http.get<{ code: number, result: Credit }>(this.url + '/getCredit.php?username=' + username);
  }
}
