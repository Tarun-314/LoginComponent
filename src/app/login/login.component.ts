import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  providers:[CookieService,HttpClient],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
   
})
export class LoginComponent {

  name!:string;
  pass!:string;
  isRegisterMode: boolean = false; 
  
  isForgotPassword: boolean = false;
  
  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    private router:Router
    ){
    
    var bodyparams={
      username:this.cookieService.get("username"),
      password:this.cookieService.get("password"),
      Token:this.cookieService.get("token")
    }
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    if(bodyparams.username!=""&&bodyparams.password!=""&&bodyparams.Token!=""){
      this.http.post("https://localhost:7263/Islogin",bodyparams,{headers:headers}).subscribe(
        (res)=>{
          if(res){
            this.router.navigate(['/Home']);
          }
        }
        )
      }
    }
    
    Login() {
      var bodyparams={
        username:this.name,
        password:this.pass,
      }
      const headers=new HttpHeaders({'Content-Type':'application/json'});
      this.http.post("https://localhost:7263/login",bodyparams,{headers:headers}).subscribe(
        (res:any)=>{
          //console.log(res);
          
          this.cookieService.set("token",res['data']);
          this.cookieService.set("username",this.name);
          this.cookieService.set("password",this.pass);
          this.router.navigate(['/Home']);
        }
        )
      
    }
  
  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
  toggleForgotPassword() {
    this.isForgotPassword = !this.isForgotPassword;
  }
 
}
