import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreEditService {

  private dataSaved: {id: string, name: string} = {id: '', name: ''}
  editValuesSubject = new BehaviorSubject<{id: string, name: string}>({id: '', name: ''});
  editValues$: Observable<{id: string, name: string}> = this.editValuesSubject.asObservable();

  constructor() { }

  saveDataToBack(data: {id: string, name: string}){
    this.dataSaved = data;
    this.editValuesSubject.next(data);
  }


}
