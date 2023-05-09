import { Component, OnInit } from '@angular/core';
import { StoreEditService } from '../services/store-edit.service';
import { Subscription, concatMap, tap } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreAddService } from '../services/store-add.service';
import { StoreApiGetService } from '../services/store-api-get.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.sass']
})
export class StoreEditComponent implements OnInit {

  sub!: Subscription;
  subTabs!: Subscription;
  activeTab: 'tabGreetings' | 'tabOverride' = 'tabGreetings';
  id!: any;
  defaultDataPokemon: any
  defaultDataRicky: any
  isLoading: boolean = false;

  private dataToBack: {id: string, name: string} = {id: '', name: ''}

  constructor(private storeEditService:StoreEditService,
              private storeAddService: StoreAddService,
              private storeApiGetService: StoreApiGetService, 
              private router: Router) { }


  ngOnInit(): void {
    this.sub = this.storeEditService.editValues$.subscribe(data => {
      this.dataToBack = data;
    });
    
    this.subTabs = this.storeAddService.tabs$.subscribe(tab => {
      this.activeTab = tab;
    });
    this.isLoading = true;
    this.receivingData();
  }

  receivingData(){
    this.storeApiGetService.getAllElements().subscribe(resp => {
      console.log(resp);
      // you need to take out the data you have in the params you need, you have two,
      // you will have to take out of that object both of them
      this.id = resp.respParams; 
      //this is like the example for EN
      this.defaultDataPokemon = resp.respPokemon;
      //this is like the example for EN
      this.defaultDataRicky = resp.respRicky;      
      
      this.isLoading = false;
      //En este momento llamas a la funcion para setear el form
    })

    this.storeApiGetService.getAllElementsToEdit().subscribe(resp => {
      console.log('edit');
      console.log(resp);
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
