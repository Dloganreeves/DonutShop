import { Routes } from '@angular/router';
import { DonutComponent } from './component/donut/donut.component';
import { DonutDetailsComponent } from './component/donut-details/donut-details.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CartComponent } from './component/cart/cart.component';

export const routes: Routes = [
    {path:"Home",component:DonutComponent},
    {path:"Donut/:id", component: DonutDetailsComponent},
    {path:"Cart", component: CartComponent},
    {path:"", redirectTo:"/Home", pathMatch:'full'},
    {path:"**", component: NotFoundComponent}
];
