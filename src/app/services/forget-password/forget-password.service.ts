import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PasswordSignature } from './password-signature';
@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  url88 = 'https://topup-premier888.askmebet.io/v0.1';
  
  url: string = environment.apiUrl;
  constructor(protected http: HttpClient) { }

  public resetPassword(userName: string, signature: PasswordSignature): Observable<any> {
    return this.http.put<any>(this.url88 + '/partner/member/reset-password/587262a34b5896b2a15ee33eda3816ef/' + userName, signature);
  }

  public resetPasswordLocal(username: string, password: string): Observable<number> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<number>(this.url + '/resetPasswordLocal.php', params);
  }
}
