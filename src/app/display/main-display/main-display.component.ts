import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceLocator } from 'src/app/services/service-locator';
import { QrPopupComponent } from '../qr-popup/qr-popup.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {
  balance: number = 160003;
  currency = new Intl.NumberFormat('th-TH', {
    minimumFractionDigits: 2
  });
  modalSubscription: Subscription;
  userName: string = "Test007";

  constructor() { }

  ngOnInit(): void {
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
}