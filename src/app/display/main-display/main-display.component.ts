import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceLocator } from 'src/app/services/service-locator';
import { QrPopupComponent } from '../qr-popup/qr-popup.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UserData } from 'src/app/services/login/user-data';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorMessage } from 'src/app/shared/utils/error-message';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  user: UserData = {} as UserData;
  currency = new Intl.NumberFormat('th-TH', {
    minimumFractionDigits: 2
  });
  modalSubscription: Subscription;

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    const u = localStorage.getItem('username65gg01');
    if (!u) {
      this.router.navigate(["/"]);
    } else {
      this.loadUser(u);
    }
  }

  async loadUser(u: string) {
    try {
      this.user = await this.loginService.getUserByUserName(u).toPromise();
      if (!this.user) {
        throw new Error("User not found");
      }
    } catch (e) {
      ErrorMessage.alert(e);
      this.router.navigate(["/"]);
    }
  }

  private _unsubscribe(): void {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
      this.modalSubscription = null;
    }
  }

  qrOpen() {
    const ngbModal: NgbModal = ServiceLocator.get(NgbModal);
    const opts = {} as NgbModalOptions;
    opts.backdrop = 'static';
    opts.windowClass = 'in modalw60';
    const modalRef = ngbModal.open(QrPopupComponent, opts);
    // modalRef.componentInstance.doctorLists = this.doctorLists;
    const dlg = modalRef.componentInstance as QrPopupComponent;
    this.modalSubscription = dlg.resultEvent.subscribe(async (item: any) => {
      this._unsubscribe();
      modalRef.close();
    });
  }

  async logOut() {
    localStorage.setItem('username65gg01', null);
    await this.loginService.userlogout(this.user.username).toPromise();
    this.router.navigate(["/"]);
  }
}