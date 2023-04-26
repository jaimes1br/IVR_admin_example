import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreAddComponent } from './store-add/store-add.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreEditComponent } from './store-edit/store-edit.component';
import { StoreOverrideeComponent } from './store-overridee/store-overridee.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreListComponent,
    StoreAddComponent,
    StoreEditComponent,
    StoreOverrideeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
