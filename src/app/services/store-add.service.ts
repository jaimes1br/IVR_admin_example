import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreAddService {

  tabsSubject = new BehaviorSubject<'tabGreetings' | 'tabOverride'>('tabGreetings');
  tabs$: Observable<'tabGreetings' | 'tabOverride'> = this.tabsSubject.asObservable();

  constructor() { }

  setTabsValues(tab: 'tabGreetings' | 'tabOverride'){
    this.tabsSubject.next(tab);
  }
   
  
}
