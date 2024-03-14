import { Component } from '@angular/core';
import { ShareDonutDetailService } from '../../service/share-donut-detail.service';
import { DonutDetails } from '../../Model/donut-details';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
Cart: DonutDetails[] = []
  constructor(private donutservice: ShareDonutDetailService) {}

ngOnInit() {
  this.Cart = this.donutservice.cart;
}

RemoveDonut(d: DonutDetails):void {
 this.donutservice.removeCart(d);
}

}
