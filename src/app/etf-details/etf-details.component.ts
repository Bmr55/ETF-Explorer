import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { etfs } from '../etfs';
// import { WatchlistService } from '../watchlist.service';

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
    watchBtnStyle: string = "watchlist-btn add-btn";
    watchBtnText: string = "Add to Watchlist";
    watchBtnThemeColor: string = "primary";

    constructor(
        private route: ActivatedRoute, 
        //private watchlistService: WatchlistService
        ) { }

    ngOnInit() {
        // First get the etf symbol from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const etfSymbolFromRoute = String(routeParams.get('etfId'));
      
        // Find the etf that correspond with the symbol provided in route.
        this.etf = etfs.find(etf => etf.symbol === etfSymbolFromRoute);

        this.holdingsDataSource = this.etf.largest_holdings;

        if(this.etf.sector_allocation) {
            this.allocationLabel = 'Sector Allocation';
            this.allocationDataSource = this.etf.sector_allocation;
            this.allocationColumnName = 'Sector';
        } else if(this.etf.region_allocation) {
            this.allocationLabel = 'Region Allocation';
            this.allocationDataSource = this.etf.region_allocation;
            this.allocationColumnName = 'Region';
        }
      }

      addToWatchlist() {
          if(this.etfWatched) {
              this.etfWatched = false;
              this.watchBtnStyle = "watchlist-btn";
              this.watchBtnThemeColor = "primary";
              this.watchBtnText = "Add to Watchlist";
              //this.watchlistService.removeFromWatchlist(this.etf);
          } else {
              this.etfWatched = true;
              this.watchBtnStyle = "watchlist-btn";
              this.watchBtnThemeColor = "warn";
              this.watchBtnText = "Remove from Watchlist";
              //this.watchlistService.addToWatchlist(this.etf);
          }

          //console.log(this.watchlistService.getWatchlist());

      }
  }