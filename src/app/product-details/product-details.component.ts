import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //importa a interface  para acessar dados do componente associado a rota

import { products } from '../products' //importando o array de produtos
import { CartService } from '../cart.service'; //importando o serviço de carrinho

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product; //define a propriedade product

  addToCart(product){
    window.alert('Seu produto foi adicionado ao carrinho!');
    this.cartService.addToCart(product);
  }

  constructor(
    private route: ActivatedRoute,//injeta a interface ActivatedRoute no construtor para iniciar o objeto
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });//faz um fetch do produto baseado no Id
  }

}