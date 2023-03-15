import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorMessage } from 'src/app/shared/utils/error-message';
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      const passWithMD5 = Md5.hashStr(this.password);
      const log = await this.loginService.userlogin(this.username, passWithMD5).toPromise();
      if (log > 0) {
        await localStorage.setItem('username65gg01', this.username);
        await this.router.navigate(["/display/main"]);
      } else {
        throw Error('login invalid');
      }
    } catch (e) {
      ErrorMessage.alert(e);
    }
  }
}
