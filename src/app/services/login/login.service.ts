import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  baseUrl: string = "http://localhost/imoney-wallet";
  constructor(protected http: HttpClient) { }

  public userlogin(username: string, password: string): Observable<number> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post<number>(this.baseUrl + '/login.php', params);
  }

  public getUserByUserName(username: string): Observable<UserData> {
    return this.http.get<UserData>(this.baseUrl + '/getUser.php?username='+ username);
  }

  public userlogout(username: string): Observable<void> {
    return this.http.get<void>(this.baseUrl + '/logout.php?username='+ username);
  }
}
