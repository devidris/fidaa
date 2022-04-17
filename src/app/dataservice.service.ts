import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { collectionData } from 'rxfire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  constructor(private fireStore: Firestore) {}

  addProduct(product: any) {
    const data = collection(this.fireStore, 'products');
    return addDoc(data, product);
  }
  getProduct() {
    const data = collection(this.fireStore, 'product');
    return collectionData(data, { idField: 'id' });
  }
  deleteProduct(product: any) {
    const data = doc(this.fireStore, `products/${product.id}`);
    return deleteDoc(data);
  }
  updateProduct(product: any) {
    const data = doc(this.fireStore, `products/${product.id}`);
    return updateDoc(data, product);
  }

  addCollections(collection: any) {
    const data = collection(this.fireStore, 'collections');
    return addDoc(data, collection);
  }
  getCollections() {
    const data = collection(this.fireStore, 'collections');
    return collectionData(data, { idField: 'id' });
  }
  deleteCollections(collection: any) {
    const data = doc(this.fireStore, `products/${collection.id}`);
    return deleteDoc(data);
  }
  updateCollections(collection: any) {
    const data = doc(this.fireStore, `products/${collection.id}`);
    return updateDoc(data, collection);
  }

  addContact(contact: any) {
    const data = collection(this.fireStore, 'contact');
    return addDoc(data, contact);
  }
  getContact() {
    const data = collection(this.fireStore, 'contact');
    return collectionData(data, { idField: 'id' });
  }
  deleteContact(contact: any) {
    const data = doc(this.fireStore, `products/${contact.id}`);
    return deleteDoc(data);
  }
  updateContact(contact: any) {
    const data = doc(this.fireStore, `products/${contact.id}`);
    return updateDoc(data, contact);
  }

  getHero() {
    const data = collection(this.fireStore, 'hero');
    return collectionData(data, { idField: 'id' });
  }
  updateHero(hero: any) {
    const data = doc(this.fireStore, `hero/${hero.id}`);
    return updateDoc(data, hero);
  }
}
