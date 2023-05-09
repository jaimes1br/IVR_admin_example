import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, concatMap, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreApiGetService {
 
  private storeGretingEditSubject = new BehaviorSubject<{id: string}>({id: ''});
  storeGretingEdit$: Observable<{id: string}> = this.storeGretingEditSubject.asObservable();
  
  constructor(private http: HttpClient, 
              private activatedRoute: ActivatedRoute) { }

  getPokemon(){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/56')
  }

  getRickAndMorty(){
    return this.http.get<any>('https://rickandmortyapi.com/api/character/25')
  }

  getNewCharacterRick(){
    return this.http.get<any>('https://rickandmortyapi.com/api/character/75')
  }
  
  getAllElements(){
    return this.activatedRoute.params.pipe(
      concatMap(respParams => {
        return this.getPokemon().pipe(
          concatMap(respPokemon => 
            this.getRickAndMorty().pipe(
              map(respRicky => {
                return {respParams,respPokemon,respRicky}
        })
      ))
      )
    })
    )
  }
   
  getDefaultStoreEn(){
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/70')
  }

  getDefaultStoreFr(){
    return this.http.get<any>('https://rickandmortyapi.com/api/character/70')
  }

  setStoreGreetingToEdit(id:string){
    this.storeGretingEditSubject.next({id});
  }

  getAllElementsToEdit(){
    return this.getDefaultStoreEn().pipe(
      concatMap( respDefaultEn => {
        return this.getDefaultStoreFr().pipe(
          map( respDefaultFr => {
            return { 
              respDefaultEn, 
              respDefaultFr, 
              respData: this.storeGretingEditSubject.getValue()
            }
          })
        )
      })
    )
  }


}
