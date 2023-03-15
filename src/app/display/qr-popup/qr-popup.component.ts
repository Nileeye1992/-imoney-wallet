import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qr-popup',
  templateUrl: './qr-popup.component.html',
  styleUrls: ['./qr-popup.component.css']
})

export class QrPopupComponent implements OnInit {
  @Output() resultEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
