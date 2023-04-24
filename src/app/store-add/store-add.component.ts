import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StoreAddService } from '../services/store-add.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreEditService } from '../services/store-edit.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.sass']
})
export class StoreAddComponent implements OnInit {
  
  tabValue: string = 'opc1'
  id: string = ''
  name: string = '';

  constructor(private storeAddService: StoreAddService, 
              private activatedRoute:ActivatedRoute, 
              private storeEditService: StoreEditService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(e => {
      this.id = e['id'];
      this.name = e ['name'];
    })
  }

  onTabChange(opc: string){
    this.tabValue = opc;
    console.log('click on ' + this.tabValue);
    this.storeAddService.setTabsValues(opc)
  }

  onGoToEdit(){
    this.storeEditService.saveDataToBack({id: this.id,name: this.name});
    this.router.navigate(['/storeEdit']);
  }
}
