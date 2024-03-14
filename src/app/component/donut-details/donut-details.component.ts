import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ShareDonutDetailService } from '../../service/share-donut-detail.service';
import { DonutDetails } from '../../Model/donut-details';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
  [x: string]: any;
constructor(private activateRoute: ActivatedRoute, private DonutExtraService: ShareDonutDetailService, private router: Router) {};
donutExtraResult: DonutDetails = {} as DonutDetails;

ngOnInit(){
  this.activateRoute.paramMap.subscribe((params) => {
    let id = Number(params.get("id"));
    this.callApi(id)
    if(this.donutExtraResult == undefined){
      this.router.navigate(["/DonutNotFound"]);
    } 
  })
}
callApi(id: number){
  this.DonutExtraService.getDonutbyId(id).subscribe((response:DonutDetails) => {
    console.log(response);
    this.donutExtraResult = response
  });
}

AddtoCart():void{
  this.DonutExtraService.addtoCart(this.donutExtraResult)
}
}
