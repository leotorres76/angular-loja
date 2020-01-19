import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;

  constructor(
    private cartService: CartService, //injeta o serviço cartService
    private formBuilder: FormBuilder, //injeta o serviço formBuilder
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
  // Process checkout data here
    window.alert('Seu pedido foi enviado!', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}