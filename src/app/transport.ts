/**
 * Definition d'un Transport
 */
export class Transport{
    
    constructor(
        public title:string=null,
        public status:string='PROPOSED', 
        public departureDate:Date=new Date(), 
        public arrivalDate:Date=new Date(),
        public coordinates_from:{lat:number,lon:number}=null,
        public coordinates_to:{lat:number,lon:number}=null,
        public vehicule:string=null,
        public comment:string=null,
        public uuid:any=null
        ){  }
}