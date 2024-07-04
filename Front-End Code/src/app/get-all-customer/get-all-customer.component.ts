import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-all-customer',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './get-all-customer.component.html',
  styleUrl: './get-all-customer.component.css'
})
export class GetAllCustomerComponent {

  customer:any=[]
  constructor(private cusService:CustomerService){

  }
  ngOnInit()
  {
    this.getAllValue()
  }
  getAllValue()
  {
    this.cusService.getAllCustomer().subscribe((res)=>{
      console.log(res);
      this.customer=res;
    })
  }
delCustome(id:any)
{
  console.log(id)
  this.cusService.delCustomer(id).subscribe((res)=>{
    console.log(res);
    this.getAllValue();
  });
}
}
