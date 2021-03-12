import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { ExchangeTradedFund, etfs } from '../etfs';
import { WatchlistService } from '../watchlist.service';

@Component({
    selector: 'app-etf-details',
    templateUrl: './etf-details.component.html',
    styleUrls: ['./etf-details.component.scss']
  })
export class ETFDetailsComponent implements OnInit {
    etf: any;

    allocationLabel: string = "";
    allocationColumnName: string = "";

    allocationDataSource: any;
    holdingsDataSource: any;

    allocationDisplayedColumns: string[] = ['name', 'percent'];
    holdingsDisplayedColumns: string[] = ['number', "name"]

    etfWatched: boolean = false;
    watchBtnText: string = "Add to Watchlist";
    watchBtnThemeColor: string = "primary";

    constructor(
        private route: ActivatedRoute, 
        private watchlistService: WatchlistService,
        public dialog: MatDialog
        ) { }

    ngOnInit() {
        // First get the etf symbol from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const etfSymbolFromRoute = String(routeParams.get('etfId'));
      
        // Find the etf that correspond with the symbol provided in route.
        let foundObj = etfs.find(etf => etf.symbol === etfSymbolFromRoute);

        if(foundObj) {
          this.etf = ExchangeTradedFund.createExchangeTradedFund(foundObj);
        }

        this.holdingsDataSource = this.etf.largest_holdings;

        if(this.etf.allocation_type == "sector") {
            this.allocationLabel = 'Sector Allocation';
            this.allocationDataSource = this.etf.allocation;
            this.allocationColumnName = 'Sector';
        } else if(this.etf.allocation_type == "region") {
            this.allocationLabel = 'Region Allocation';
            this.allocationDataSource = this.etf.allocation;
            this.allocationColumnName = 'Region';
        }

        if(this.watchlistService.contains(etfSymbolFromRoute)) {
            this.etfWatched = true;
            this.watchBtnThemeColor = "warn";
            this.watchBtnText = "Remove from Watchlist";
        } else {
            this.etfWatched = false;
            this.watchBtnThemeColor = "primary";
            this.watchBtnText = "Add to Watchlist";
        }
      }

      toggleWatchlist() {
          if(this.etfWatched) {
              this.etfWatched = false;
              this.watchBtnThemeColor = "primary";
              this.watchBtnText = "Add to Watchlist";
              this.watchlistService.removeFromWatchlist(this.etf);
          } else {
              this.etfWatched = true;
              this.watchBtnThemeColor = "warn";
              this.watchBtnText = "Remove from Watchlist";
              this.watchlistService.addToWatchlist(this.etf);
          }

          //console.log(this.watchlistService.getWatchlist());

      }

      viewDescription(): void {
        const dialogRef = this.dialog.open(ETFDescriptionDialog, {
          width: '75%',
          data: this.etf.description});
    
          dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
          });
    
      }
  }

@Component({
    selector: 'etf-description-dialog',
    templateUrl: 'etf-description-dialog.html',
    styleUrls: ['etf-description-dialog.scss']
  })
  export class ETFDescriptionDialog {
  
    description: string;
  
    constructor(
      public dialogRef: MatDialogRef<ETFDescriptionDialog>,
      @Inject(MAT_DIALOG_DATA) public data: string) {
        this.description = data;
      }
  
    onCancelClick(): void {
      this.dialogRef.close();
    }
  
  }