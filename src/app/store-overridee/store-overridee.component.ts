import { Component, OnInit } from '@angular/core';
import { StoreEditService } from '../services/store-edit.service';
import { StoreAddService } from '../services/store-add.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store-overridee',
  templateUrl: './store-overridee.component.html',
  styleUrls: ['./store-overridee.component.sass']
})
export class StoreOverrideeComponent implements OnInit {

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
