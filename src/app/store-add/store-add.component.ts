import { Component, OnInit, ViewChild } from '@angular/core';
import { StoreAddService } from '../services/store-add.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreEditService } from '../services/store-edit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.sass']
})
export class StoreAddComponent implements OnInit {
  
  id: string = ''
  name: string = '';
  subTabs!: Subscription;

  activeTab: 'tabGreetings' | 'tabOverride' = 'tabGreetings';

  @ViewChild('tabOpc1') tabOpc1!: any;
  @ViewChild('tabOpc2') tabOpc2!: any;

  constructor(private storeAddService: StoreAddService, 
              private activatedRoute:ActivatedRoute, 
              private storeEditService: StoreEditService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(e => {
      this.id = e['id'];
      this.name = e ['name'];
    })

    this.subTabs = this.storeAddService.tabs$.subscribe(tab => {
      this.activeTab = tab;    
    })
  }

 
  onGoToEdit(){
    this.storeEditService.saveDataToBack({id: this.id,name: this.name});
    this.storeAddService.setTabsValues(this.activeTab);
    this.router.navigate(['/storeEdit']);
  }

  onGoToEditOverride(){
    this.storeEditService.saveDataToBack({id: this.id,name: this.name});
    this.storeAddService.setTabsValues(this.activeTab);
    this.router.navigate(['/storeOverride']);  
  }
}
