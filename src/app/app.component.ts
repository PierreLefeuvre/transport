import { Component,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None, //permet d'appliquer les styles sur tout les components
  styleUrls: [
  './app.component.css',
  '../assets/css/bootstrap.min.css',
    '../../node_modules/primeng/resources/primeng.min.css',
    '../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../node_modules/font-awesome/css/font-awesome.min.css']
})
export class AppComponent {
  title = 'Transport';
}
