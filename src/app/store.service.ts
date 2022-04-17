import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
private collectionSource = new BehaviorSubject<string>('default')
currentCollection = this.collectionSource.asObservable()
  constructor() { }
  changeCollection(collection:string){
    this.collectionSource.next(collection)
  }
}
