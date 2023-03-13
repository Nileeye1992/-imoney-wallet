import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  ) { }

  ngOnInit(): void {
  }

  async login() {
    console.log("username ", this.username);
    console.log("password ", this.password);
    this.router.navigate(["/display/main"]);
    // try {
    //   if (!this.username) throw new Error('กรุณาระบุ Username');
    //   else if (!this.password) throw new Error('กรุณาระบุ Password');

    //   this.loginData = {} as LoginData;
    //   this.loginData.status = false;
    //   this.loginData.username = this.username;
    //   this.loginData.password = this.password;
    //   const result = await this.userService.findByUsernameAndPassword(this.loginData).toPromise();
    //   if (result.status == true) {

    //     localStorage.setItem('user_id', result.userId.toString());
    //     this.goToPage(result.userId.toString());
    //   }
    //   else throw new Error('Username Password ไม่ถูกต้อง');
    // } catch (e) {
    //   ErrorMessage.alert(e);
    // }
  }
}
