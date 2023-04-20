import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreAddService {

  tabsSubject = new BehaviorSubject<string>('opc1');
  tabs$: Observable<string> = this.tabsSubject.asObservable();

  constructor() { }

  setTabsValues(tab: string){
    this.tabsSubject.next(tab);
  }
   
}
