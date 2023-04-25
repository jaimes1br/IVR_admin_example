import { Component, OnInit } from '@angular/core';
import { StoreEditService } from '../services/store-edit.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { StoreAddService } from '../services/store-add.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.sass']
})
export class StoreEditComponent implements OnInit {

  sub!: Subscription;
  subTabs!: Subscription;
  activeTab: 'tabGreetings' | 'tabOverride' = 'tabGreetings';

  private dataToBack: {id: string, name: string} = {id: '', name: ''}

  constructor(private storeEditService:StoreEditService,
              private storeAddService: StoreAddService,          
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.storeEditService.editValues$.subscribe(data => {
      this.dataToBack = data;
    });
    
    this.subTabs = this.storeAddService.tabs$.subscribe(tab => {
      this.activeTab = tab;
    })
  }

  onGoToBack(){
    this.storeAddService.setTabsValues(this.activeTab);
    this.router.navigate(['/storeAdd',{id:this.dataToBack.id, name:this.dataToBack.name}]);
    this.storeEditService.saveDataToBack({id: '', name: ''});
  }
  
  ngOnDestroy(): void {    
    if( this.sub ) this.sub.unsubscribe();
    if( this.subTabs ) this.subTabs.unsubscribe();
  }
}
