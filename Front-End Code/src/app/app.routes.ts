import { Routes } from '@angular/router';
import { GetAllCustomerComponent } from './get-all-customer/get-all-customer.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

export const routes: Routes = [
    {path:"", component:GetAllCustomerComponent},
    {path:"new", component:PostCustomerComponent},
    {path:"get", component:GetAllCustomerComponent},
    {path:"edit/:id", component:UpdateCustomerComponent},
    //{path:'del/:id', component:}
    //{path:"**", component:PostCustomerComponent}
];
