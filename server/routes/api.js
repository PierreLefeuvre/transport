const express = require('express');
const router = express.Router();

var tr = require('../data/transports.json');

/* tableau d'objet qui stockera les objets "transports" */
var transports = tr.transports;

const uuidV4 = require('uuid/v4');

/* Recupération de la liste de transport */
router.get('/transport', function(req, res){
	//res.setHeader('Access-Control-Allow-Origin', '*'); 
	//res.setHeader('content-type', 'application/json'); 
	//res.setHeader('Content-Length', transports.length); 
	res.send(transports);
});

/* Recupération d'un transport spécifique */
router.get('/transport/:id', function(req, res){
	res.send(transports[req.params.id]);
});

/* Suppression d'un transport */
router.delete('/transport/:id', function(req, res){
	transports.splice(req.params.id,1);
	res.send('delete transport ' + req.params.id);
});

/* Ajout d'un transport */
router.post('/transport',function(req, res){
	var uuid = uuidV4();

	var transport = {
		title:req.body.title, 
		status: req.body.status, 
		departureDate: new Date(req.body.departureDate),
		arrivalDate: new Date(req.body.arrivalDate),
		coordinates_to: {
            lat: 49.07,
            lon: -0.30
        },
		uuid: uuid,
		comment: req.body.comment,
		vehicule: req.body.vehicule
		};

	transports.push(transport);
	res.send('transport create !');
});

/* Mise a jour d'un transport */
router.patch('/transport/:id',function(req, res){
	transports[req.params.id].title = req.body.title;
	transports[req.params.id].status = req.body.status;
	transports[req.params.id].departureDate = new Date(req.body.departureDate);
	transports[req.params.id].arrivalDate = new Date(req.body.arrivalDate);
	transports[req.params.id].vehicule = req.body.vehicule;
	transports[req.params.id].comment = req.body.comment;
	res.send('transport update !');
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;