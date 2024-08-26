import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
data:string;
user:string;
constructor(private coockie:CookieService){
  this.data=this.coockie.get('token');
  this.user=this.coockie.get('username');
}

}
