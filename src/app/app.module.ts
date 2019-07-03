import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListingComponent} from './list/listing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
