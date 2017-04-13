import { Component, OnInit } from '@angular/core';
import { TransportService } from '../transport.service';
import { Transport } from '../transport';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css','../../assets/css/bootstrap.min.css'],
  providers: [TransportService]
})
export class AddComponent implements OnInit {
  
  formGroupTransport: FormGroup;
  alert:any={message: 'OK',show:false, status: 'success'}
  transport:Transport;
  isSubmit:boolean=false;
  listStatus = ['PROPOSED', 'CONFIRMED', 'RESERVED', 'CHECKEDIN', 'CHECKEDOUT'];
  
  constructor(public transportService: TransportService){}

  /**
   * Fonction appelé à l'initialisation de la page
   * Met en place les controles sur les champs du formulaire
   */
  ngOnInit() {

    //Mise en place des controlles a appliquer au formulaire:
    this.formGroupTransport = new FormGroup({ 
      title: new FormControl('', Validators.required), 
      status: new FormControl(),
      departureDate: new FormControl(),
      arrivalDate: new FormControl(),
      vehicule: new FormControl(),
      comment: new FormControl()
    })

    //Insert les valeurs par défault des champs:
    this.formGroupTransport.setValue({
      title: null,
      status: 'PROPOSED',
      departureDate: null,
      arrivalDate: null,
      vehicule: '',
      comment: ''
    })
    console.log(this.formGroupTransport.controls.title.status);
  }

  /**
   * Ajout d'un trajet si le formulaire est valide
   */
  onSubmit(){
    this.isSubmit = true;
    
    //Si le formulaire est valide:
    if(this.formGroupTransport.status == 'VALID'){
      this.transport = new Transport(
        this.formGroupTransport.value.title,
        this.formGroupTransport.value.status,
        new Date(this.formGroupTransport.value.arrivalDate),
        new Date(this.formGroupTransport.value.departureDate),
        null,
        null,
        this.formGroupTransport.value.vehicule,
        this.formGroupTransport.value.comment
      );


      this.transportService.addTransport(this.transport);

      this.showAlert("Success ! ", "success");
    }
    else //formulaire invalide
      this.showAlert("Formulaire incorrecte ! ", "danger");
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
