import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { etfs } from '../etfs';

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
  profile: ProfileData;

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {
    this.profile = {
      "name": "",
      "age": "",
      "country": "",
      "risk": ""
    }
  }

  ngOnInit() {}

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileDialog, {
      width: '75%',
      data: this.profile
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Result: ' + result);

      if(result != undefined) {
        console.log('The result was not undefined');
        console.log("Name: " + result.name);
        this.profile = result;
      } else {
        console.log('The result was undefined');
      }
      
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