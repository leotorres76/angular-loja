import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //importa a interface  para acessar dados do componente associado a rota

import { products } from '../products' //importando o array de produtos

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product; //define a propriedade product

  constructor(
    private route: ActivatedRoute,//injeta a interface ActivatedRoute no construtor para iniciar o objeto
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });//faz um fetch do produto baseado no Id
  }

}