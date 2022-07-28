import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string="";
  password:string="";
  error:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login():void{
    this.error=false;
    if(this.usuario==="admin" && this.password==="admin"){
      this.router.navigate(['/inicio']);
    }else{
      this.error=true;
    }

  }

}
