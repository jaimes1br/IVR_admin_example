import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.sass']
})
export class StoreListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToAdd(id:number,name: string){
    this.router.navigate(['/storeAdd',{id, name}]);
  }

}
