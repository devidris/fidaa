import { collection } from 'firebase/firestore';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  collections: any[] = [];
  activeCollection: any = this.collections[0];
  collection: string | undefined;
  constructor(
    private dataService: DataserviceService,
    private storeService: StoreService
  ) {}

  changeCollection(collection: string) {
    this.storeService.changeCollection(collection.toLowerCase());
  }
  ngOnInit(): void {
    this.dataService.getCollections().subscribe((collection: any) => {
      this.collections = collection;
      this.storeService.changeCollection(collection[0].category);

      this.storeService.currentCollection.subscribe((collection) => {
        this.collection = collection;
      });
    });
  }
}
