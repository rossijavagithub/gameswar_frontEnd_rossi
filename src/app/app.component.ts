import { Component, OnInit  } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejemplo-template';
  currentRoute: string="";
  mostrarLogin:boolean=false;

  constructor(private router:Router){
    this.mostrarLogin=false;
    this.router.events.subscribe((event: Event) => {

        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
              console.log(event.url);

              if(this.currentRoute === '/servicio' || this.currentRoute === '/contacto' ||this.currentRoute === '/nosotros' || this.currentRoute === '/inicio'){
                this.mostrarLogin=true;
              }
        }


    });
  }
  ngOnInit() {



  }

}
