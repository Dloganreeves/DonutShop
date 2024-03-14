import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donut } from '../Model/donut';
import { DonutDetails } from '../Model/donut-details';

@Injectable({
  providedIn: 'root'
})
export class SharedonutService {

  constructor(private http: HttpClient) { }

 

  getDonutbyId():Observable<Donut> {
    return this.http.get<Donut>(`https://grandcircusco.github.io/demo-apis/donuts.json`)
  }

 
}
