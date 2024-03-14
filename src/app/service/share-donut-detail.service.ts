import { Injectable } from '@angular/core';
import { DonutDetails } from '../Model/donut-details';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShareDonutDetailService {
  cart:DonutDetails[] = []
  constructor(private http: HttpClient) { }

  
  
  getDonutbyId(id: number):Observable<DonutDetails> {
    return this.http.get<DonutDetails>(`https://grandcircusco.github.io/demo-apis/donuts/${id}.json`)
  }
  addtoCart(d:DonutDetails):void{
    this.cart.push(d);
  }
  
 
  
  removeCart (d:DonutDetails):void{
  let index:number = this.cart.findIndex(x => d == x);
  this.cart.splice(index,1);
}
}
