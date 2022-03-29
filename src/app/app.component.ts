import { Component } from '@angular/core';
import listadePostres from 'src/assets/json/postres.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.css']
})

export class AppComponent {

  //title = 'Como Leer un archivo JSON con Angular 8';

  Postres: any = listadePostres;

}


