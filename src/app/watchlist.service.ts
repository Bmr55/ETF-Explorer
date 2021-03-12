import { Injectable } from '@angular/core';
import { ExchangeTradedFund, etfs } from './etfs';

@Injectable({
    providedIn: 'root'
})
export class WatchlistService {

    watchlist: ExchangeTradedFund[] = [];

    constructor() { }

    addToWatchlist(etf: ExchangeTradedFund) {
        this.watchlist.push(etf);
    }

    removeFromWatchlist(etf: ExchangeTradedFund) {

        let currentWatchlist = this.watchlist;

        currentWatchlist.forEach(function(item) {
            if(item.symbol === etf.symbol) {
                const index: number = currentWatchlist.indexOf(item);
                if (index !== -1) {
                    currentWatchlist.splice(index, 1);
                } 
            } 
        });
    }

    removeFromWatchlistBySymbol(symbol: string) {
        let currentWatchlist = this.watchlist;

        currentWatchlist.forEach(function(item) {
            if(item.symbol === symbol) {
                const index: number = currentWatchlist.indexOf(item);
                if (index !== -1) {
                    currentWatchlist.splice(index, 1);
                } 
            } 
        });
    }

    getWatchlist() {
        return this.watchlist;
    }

    clearWatchlist() {
        this.watchlist = [];
        return this.watchlist;
    }

    contains(etfId: string) {
        let found = false;
        this.watchlist.forEach(function(item) {
            if(item.symbol.toUpperCase() === etfId.toUpperCase()) {
                found = true;
            }
        });

        return found;
    }

}