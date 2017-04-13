import { BrowserModule } from '@angular/platform-browser'; //utilise pr ngFor ngIf
import { NgModule } from '@angular/core'; //decoration pour AppModule
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; //sert pour les requete http vers le service rest
import { RouterModule, Routes } from '@angular/router';

//les components crées par nous même
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { AlertMessageComponent } from './tools/alert-message/alert-message.component';

//Pour l'utilisation du calendar de primNG
import { CalendarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//google map 
import { AgmCoreModule } from 'angular2-google-maps/core';

//Definition des routes
const appRoutes: Routes = [
  { path: 'view', component: ViewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'add', component: AddComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ViewComponent,
    AlertMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), 
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB28O68q6E63Tcvtb793IVNw_9eB7j1d3I'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
