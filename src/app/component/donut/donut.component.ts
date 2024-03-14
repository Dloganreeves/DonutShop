import { Component } from '@angular/core';
import { SharedonutService } from '../../service/sharedonut.service';
import { Donut } from '../../Model/donut';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
constructor (private donutservice: SharedonutService) {}

donutresult: Donut = {} as Donut;
ngOnInit () {
  this.callApi();
}
callApi(){
  this.donutservice.getDonutbyId().subscribe((response:Donut) => {
    console.log(response);
    this.donutresult = response
  });
}
}
