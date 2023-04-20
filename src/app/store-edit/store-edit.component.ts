import { Component, OnInit } from '@angular/core';
import { StoreEditService } from '../services/store-edit.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.sass']
})
export class StoreEditComponent implements OnInit {

  sub!: Subscription;
  private dataToBack: {id: string, name: string} = {id: '', name: ''}

  constructor(private storeEditService:StoreEditService,
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.storeEditService.editValues$.subscribe(data => {
      this.dataToBack = data;
    })
  }

  onGoToBack(){
    this.storeEditService.saveDataToBack({id: '', name: ''});
  }
  
  ngOnDestroy(): void {
    if( this.sub ) this.sub.unsubscribe();
  }
}
