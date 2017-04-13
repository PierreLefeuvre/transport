import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';
import { Transport } from '../transport';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css','../../assets/css/bootstrap.min.css'],
  providers: [TransportService]
})
export class ViewComponent implements OnInit {
  
  transports:Transport[]= [];

  latA: number;
  lngA: number;
  latB: number;
  lngB: number;
  
  constructor(public transportService: TransportService){}

  /**
   * Récupération de tout les objets "transport" sur le serveur
   */
  ngOnInit(){
    this.transportService.getTransports().subscribe((data) => this._setTransports(data));
    console.log(this.transports);
  }
  /**
   * Supprime un trajet via le service
   * @param id : index du trajet à supprimer
   */
  delete(id:number){
    this.transportService.deleteTransport(id);
    this.transports.splice(id,1);
  }
  /**
   * Affiche sur la google map les points de départ / arrivé
   * @param id : index du trajet a afficher
   */
  showOnMap(id:number){
    this.latA = this.transports[id].coordinates_from.lat;
    this.lngA = this.transports[id].coordinates_from.lon;
    this.latB = this.transports[id].coordinates_to.lat;
    this.lngB = this.transports[id].coordinates_to.lon;
  }
  /**
   * Rempli notre tableau contenant des elements de type "Transport"
   * @param data : 
   */
  _setTransports(data) {
   
    for(var i=0; i<data.length; i++){

      var transport = new Transport(
        data[i].title, 
        data[i].status, 
        new Date(data[i].departureDate), 
        new Date(data[i].arrivalDate), 
        data[i].coordinates_from, 
        data[i].coordinates_to, 
        data[i].vehicule,
        data[i].comment,
        data[i].uuid
        );

      this.transports.push(transport);
    }
  }
}