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
      'Content-Type': 'application/json, text/plain, */*',
    })
  };

  url: string = environment.apiUrl;
  constructor(protected http: HttpClient) { }

  public resetPassword1(signature: PasswordSignature): Observable<any> {
    return this.http.put<any>(this.url + '/resetPassword.php', signature);
  }

  public resetPassword(username: string, password: string, signature: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('signature', signature)
      .set('password', password);
    return this.http.post<any>(this.url + '/resetPassword.php', params);
  }

  public resetPasswordLocal(username: string, password: string): Observable<number> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<number>(this.url + '/resetPasswordLocal.php', params);
  }
}
