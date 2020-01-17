## Angular
Pequeno exemplo de app feito no Angular e suas principais características de utilização

![](Screenshot.png)

### Template Syntax

*ngFor<br>
*ngIf<br>
Interpolation {{}}<br>
Property Binding []<br>
Event Binding ()<br>

### Routing

app.module.ts
{ path: 'products/:productId', component: ProductDetailsComponent }

*.html
<a [routerLink]="['/products', productId]">

*.component.ts
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
  ) { }

}

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
}
