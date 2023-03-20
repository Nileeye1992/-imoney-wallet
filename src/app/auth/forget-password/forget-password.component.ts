import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPasswordService } from 'src/app/services/forget-password/forget-password.service';
import { PasswordSignature } from 'src/app/services/forget-password/password-signature';
import { ErrorMessage } from 'src/app/shared/utils/error-message';
import { MessageBox } from 'src/app/shared/utils/message-box/message-box';
import { Md5 } from "ts-md5/dist/md5";


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

export class ForgetPasswordComponent implements OnInit {
  username: string;
  newPassword: string;
  confirmNewPassword: string;

  constructor(
    private router: Router,
    private forgetPasswordService: ForgetPasswordService,
  ) { }
  ngOnInit(): void {
  }

  async changePassword() {
    try {
      if (!this.username) throw Error('Please input UserName');
      if (!this.newPassword) throw Error('Please input New password');
      if (!this.confirmNewPassword) throw Error('Please input Confirm password');
      if (this.newPassword != this.confirmNewPassword) throw Error('New password and Confirm password is not the same');
      let signature = this.newPassword + ":65gg01";

      const signatureHash = Md5.hashStr(signature);
      let user = "65gg01" + this.username;
      let sign = {
        username: user,
        password: this.newPassword,
        signature: signatureHash
      } as PasswordSignature;

      const change = await this.forgetPasswordService.resetPassword(user, this.newPassword , signatureHash).toPromise();
      console.log(change);
      
      if (change && change.code == 0) {
        // เปลี่ยนรหัสสำเร็จ ทีนี้ต้องมาเปลี่ยนในฐานเรา
        const reseted = await this.forgetPasswordService.resetPasswordLocal(user, this.newPassword).toPromise();
        //Md5.hashStr(this.newPassword)
        if (reseted > 0) {
          await MessageBox.success('change password success');
          await this.router.navigate(["/"]);
        }
      }

      console.log("user : ", user);
      console.log("signature : ", this.newPassword, signature, signatureHash);
    } catch (e) {
      ErrorMessage.alert(e);
    }
  }
}
