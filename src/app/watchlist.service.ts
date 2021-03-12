import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ExchangeTradedFund } from './etfs';

@Injectable({
    providedIn: 'root'
})
export class WatchlistService {

    localStorageChanges$ = this.localStorageService.changes$;
    watchlist: ExchangeTradedFund[] = [];

    constructor(private localStorageService: LocalStorageService) { 

        const watchlistArray = localStorageService.getArr('watchlist');
        watchlistArray.forEach((item: any) => {
            this.watchlist.push(ExchangeTradedFund.createExchangeTradedFund(item));
        });
    }

    persist(key: string, value: any) {
        this.localStorageService.set(key, value);
    }

    addToWatchlist(etf: ExchangeTradedFund) {
        this.watchlist.push(etf);
        this.persist('watchlist', this.watchlist);
    }

    removeFromWatchlist(etf: ExchangeTradedFund) {

        let currentWatchlist = this.watchlist;

        currentWatchlist.forEach(function (item) {
            if (item.symbol === etf.symbol) {
                const index: number = currentWatchlist.indexOf(item);
                if (index !== -1) {
                    currentWatchlist.splice(index, 1);
                }
            }
        });

        this.persist('watchlist', this.watchlist);
    }

    removeFromWatchlistBySymbol(symbol: string) {
        let currentWatchlist = this.watchlist;

        currentWatchlist.forEach(function (item) {
            if (item.symbol === symbol) {
                const index: number = currentWatchlist.indexOf(item);
                if (index !== -1) {
                    currentWatchlist.splice(index, 1);
                }
            }
        });

        this.persist('watchlist', this.watchlist);
    }

    getWatchlist() {
        return this.watchlist;
    }

    clearWatchlist() {
        this.watchlist = [];
        this.persist('watchlist', this.watchlist);
        return this.watchlist;
    }

    contains(etfId: string) {
        let found = false;
        this.watchlist.forEach(function (item) {
            if (item.symbol.toUpperCase() === etfId.toUpperCase()) {
                found = true;
            }
        });

        return found;
    }

}