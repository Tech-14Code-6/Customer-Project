import { Component, createComponent } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { PostCustomerComponent } from './post-customer/post-customer.component';
import { GetAllCustomerComponent } from './get-all-customer/get-all-customer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,PostCustomerComponent,UpdateCustomerComponent,
    GetAllCustomerComponent,HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CustomerApp';
}
