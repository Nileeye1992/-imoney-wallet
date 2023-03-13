import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

}
