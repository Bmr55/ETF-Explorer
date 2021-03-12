import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { ETF, etfs } from '../etfs';
import { WatchlistService } from '../watchlist.service';
import { ProfileService, Profile } from '../profile.service';

export interface ProfileData {
  name: string;
  age: string;
  country: string;
  risk: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  etfs = etfs;
  profile: Profile;

  constructor(
    public dialog: MatDialog, 
    private route: ActivatedRoute,
    private watchlistService: WatchlistService,
    private profileService: ProfileService
    ) {
    this.profile = profileService.getProfile();
  }

  ngOnInit() {}

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileDialog, {
      width: '75%',
      data: this.profile
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');

      if(result != undefined) {
        this.profileService.updateName(result.name);
        this.profileService.updateAge(result.age);
        this.profileService.updateCountry(result.country);
        this.profileService.updateRisk(result.risk);
      }

      this.profile = this.profileService.getProfile();
      
    });
  }

  viewWatchlist(): void {
    const dialogRef = this.dialog.open(ETFWatchlistDialog, {
      width: '75%',
      data: this.watchlistService.getWatchlist()});

      dialogRef.afterClosed().subscribe(result => {
        //console.log('The dialog was closed');
      });

  }

}

@Component({
  selector: 'edit-profile-dialog',
  templateUrl: 'edit-profile-dialog.html',
  styleUrls: ['edit-profile-dialog.scss']
})
export class EditProfileDialog {

  currentProfileData: ProfileData;
  newProfileData: ProfileData;

  constructor(
    public dialogRef: MatDialogRef<EditProfileDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ProfileData) {
      this.currentProfileData = data;
      this.newProfileData = {
        "name": "",
        "age": "",
        "country": "",
        "risk": ""
      }
    }

  onCancelClick(): void {
    this.dialogRef.close(this.currentProfileData);
  }

}

@Component({
  selector: 'etf-watchlist-dialog',
  templateUrl: 'etf-watchlist-dialog.html',
  styleUrls: ['etf-watchlist-dialog.scss']
})
export class ETFWatchlistDialog {

  watchlist: ETF[];
  emptyWatchlist: boolean;
  editing: boolean;

  constructor(
    public dialogRef: MatDialogRef<ETFWatchlistDialog>,
    private watchlistService: WatchlistService,
    @Inject(MAT_DIALOG_DATA) public data: ETF[]) {
      this.watchlist = data;
      this.editing = false;
      if(this.watchlist.length < 1) {
        this.emptyWatchlist = true;
      } else {
        this.emptyWatchlist = false;
      }
    }

    editWatchlist() {
      this.editing = true;
    }

    stopEditingWatchlist() {
      this.editing = false;
    }

    remove(symbol: string) {
      this.watchlistService.removeFromWatchlistBySymbol(symbol);

      if(this.watchlist.length < 1) {
        this.emptyWatchlist = true;
      }
    }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}