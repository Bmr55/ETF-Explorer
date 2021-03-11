import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ReactiveFormsModule } from '@angular/forms';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ETFListComponent } from './etf-list/etf-list.component';
import { ETFDetailsComponent } from './etf-details/etf-details.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ETFListComponent,
    ETFDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
