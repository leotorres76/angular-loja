import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToCart (product) {
    this.items.push(product);//adiciona produto no array items
  }

  getItems() {
    return this.items; //retorna produtos do array para exibir
  }

  clearCart() {
    this.items = []; //apaga os itens do array
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) {}

}