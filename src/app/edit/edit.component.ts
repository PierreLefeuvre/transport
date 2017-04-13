import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransportService } from '../transport.service';
import { Transport } from '../transport';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [TransportService]
})
export class EditComponent implements OnInit {

  id:number;
  transport:Transport=new Transport();
  alert:any={message: 'OK',show:false, status: 'success'}
  listStatus = ['PROPOSED', 'CONFIRMED', 'RESERVED', 'CHECKEDIN', 'CHECKEDOUT'];

  constructor(private route: ActivatedRoute,private router: Router,private transportService:TransportService ) { }

  /**
   * A l'initialisation de la page, on récupère les données du trajet voulu
   */
  ngOnInit() {
    //recuperation du parametre de l'url
    this.id = +this.route.snapshot.params['id'];

    //recupération via le web service du "transport"
    this.transportService.getTransport(this.id).subscribe((data) => this._setTransport(data));

    //une autre façons de faire:

    /* this.route.params
    .switchMap((params: Params) => this.transportService.getTransport(+params['id']))
    .subscribe((data) => this.setTransport(data)); */
  }
  /**
   * MAJ des infos du trajet
   */
  onSubmit(){
    this.transportService.updateTransport(this.id,this.transport);
    this.showAlert('Success ! ','success');
  }
  /**
   * Set notre objet transport avec les l'objet reçu via getTransport()
   * @param data 
   */
  _setTransport(data){
    this.transport.title = data.title;
    this.transport.status = data.status;
    this.transport.departureDate = new Date(data.departureDate);
    this.transport.arrivalDate = new Date(data.arrivalDate);
    this.transport.comment = data.comment;
    this.transport.vehicule = data.vehicule;
  }
  /**
   * Affiche un message d'alert bootstratp
   * @param message : Le message afficher
   * @param status : succes, warning, danger, infos
   */
  showAlert(message:string,status:string){
      this.alert.message = message;
      this.alert.status = status;
      this.alert.show = true;
  }
}
