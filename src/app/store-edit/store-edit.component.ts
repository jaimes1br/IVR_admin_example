import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  
  tabValue: string = 'opc1'
  sub!: Subscription;
  subTabs!: Subscription;

  @ViewChild('tabOpc1') tabOpc1!: any;
  @ViewChild('tabOpc2') tabOpc2!: any;

  private dataToBack: {id: string, name: string} = {id: '', name: ''}

  constructor(private storeEditService:StoreEditService,
              private storeAddService: StoreAddService,          
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.storeEditService.editValues$.subscribe(data => {
      this.dataToBack = data;
    });
    
    this.subTabs = this.storeAddService.tabs$.subscribe(tab => {
      this.tabValue = tab;    
    })
  }

  ngAfterViewInit(): void {
   this.onSetTabInit();
  }

  onGoToBack(){
    this.router.navigate(['/storeAdd',{id:this.dataToBack.id, name:this.dataToBack.name}]);
    this.storeEditService.saveDataToBack({id: '', name: ''});
  }
  
  onTabChange(opc: string){
    console.log('click on tab: ' + opc);    
    this.tabValue = opc;
  }
  
  onSetTabInit(){
    if(this.tabValue === 'opc1'){
      this.tabOpc1.nativeElement.click();
    }else{
      this.tabOpc2.nativeElement.click();
    }
  }

  ngOnDestroy(): void {
    if( this.sub ) this.sub.unsubscribe();
  }
}
