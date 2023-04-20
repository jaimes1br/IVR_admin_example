import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Subscription, filter } from 'rxjs';
import { StoreAddService } from '../services/store-add.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  isHome: boolean = true;
  isStoreAdd: boolean = false;
  tabValue = 'opc';

  sub!: Subscription; 

  constructor(private router:Router, private storeAddService:StoreAddService) { }

  ngOnInit(): void {
   
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((url: any) => {
        this.setElementsHeader(url?.url)
      });

    this.sub = this.storeAddService.tabs$.subscribe(tabActive => {
      this.tabValue = tabActive;    
    })
  }

  setElementsHeader(url: string){
    if(url === '/'){ //we're home  
      this.isHome = true;
      this.isStoreAdd = false;  
    }else if( url.includes('/storeAdd')){
      this.isHome = false;
      this.isStoreAdd = true;    
    }
  }



}
