import { Component } from '@angular/core';

import { etfs } from '../etfs';

@Component({
  selector: 'app-etf-list',
  templateUrl: './etf-list.component.html',
  styleUrls: ['./etf-list.component.scss']
})
export class ETFListComponent {
  etfs = etfs;
}