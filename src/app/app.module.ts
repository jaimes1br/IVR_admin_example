import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreAddComponent } from './store-add/store-add.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreEditComponent } from './store-edit/store-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoreListComponent,
    StoreAddComponent,
    StoreEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
