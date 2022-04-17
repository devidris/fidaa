import { collection } from 'firebase/firestore';
import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any;
  collection: any;
  filteredProduct!: any[];
  home: boolean = true;
  constructor(
    private router: Router,
    private dataService: DataserviceService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.dataService.getProduct().subscribe((product) => {
      if (this.router.url === '/' || this.router.url === '/#contact') {
        this.home = true;
        this.storeService.currentCollection.subscribe((collection) => {
          this.collection = collection;
          this.products = [];
          product.forEach((el) => {
            if (el['category'].toLowerCase() === collection.toLowerCase()) {
              this.products.push(el);
            }
          });
        });
      } else {
        this.home = false;
        this.products = product;
      }
    });
  }
}
