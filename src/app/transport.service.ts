import { Injectable } from '@angular/core'; //pour décorer notre service.ts
import { Headers,Http,RequestOptions  } from '@angular/http';
import { Transport } from './transport'; //notre class transport

import 'rxjs/add/operator/map'; //ReactiveX library. Nécessaire ici pour avoir les observables .map()


@Injectable()
export class TransportService {

	url ='http://localhost:3000/api' //url du service rest

	constructor(public http: Http ) { }

	/**
	 * Récupère la liste entière des trajets
	 */
	getTransports(){
		//map va appliquer .json() a chaque valeur reçu
		return this.http.get(this.url + '/transport').map(res => res.json());
	}
	/**
	 * Récupère un trajet en particulier
	 * @param id 
	 */
	getTransport(id:number){
		return this.http.get(this.url + '/transport/'+id).map(res => res.json());
	}
	/**
	 * Ajoute un trajet
	 * @param transport 
	 */
	addTransport(transport:Transport){
		var	headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		var options = new RequestOptions({ headers: headers });

		var body = 'title='+transport.title
		+'&status='+transport.status
		+'&departureDate='+transport.departureDate
		+'&arrivalDate='+transport.arrivalDate
		+'&vehicule='+transport.vehicule
		+'&comment='+transport.comment;

		this.http.post(this.url + '/transport', body, options).subscribe();
	}
	/**
	 * MAJ d'un trajet
	 * @param id 
	 * @param transport 
	 */
	updateTransport(id:number, transport:Transport){
		var	headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		var options = new RequestOptions({ headers: headers });
		
		var body = 'title='+transport.title
		+'&status='+transport.status
		+'&departureDate='+transport.departureDate
		+'&arrivalDate='+transport.arrivalDate
		+'&vehicule='+transport.vehicule
		+'&comment='+transport.comment;

		this.http.patch(this.url + '/transport/'+id, body, options).subscribe();
	}
	/**
	 * Suppression d'un trajet
	 * @param id 
	 */
	deleteTransport(id:number){
		this.http.delete(this.url + '/transport/'+id).subscribe();
	}
}
