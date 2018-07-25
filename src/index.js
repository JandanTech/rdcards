'use strict';
import _ from 'lodash';
import Deck from './models/deck';
import Player from './models/player';
import './app.css';
import firebase from "firebase/app";
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCt1iFZKaCCR5c_fDZGOf9P5XeXXF_bm_w",
    authDomain: "rd-cards.firebaseapp.com",
    databaseURL: "https://rd-cards.firebaseio.com",
    projectId: "rd-cards",
    storageBucket: "rd-cards.appspot.com",
    messagingSenderId: "533006681334"
  };
  firebase.initializeApp(config); 

var $container = document.createElement('div');
$container.id="container";
var deck = new Deck();

deck.cards.forEach(function (card, i) {
  card.enableDragging();
  card.enableFlipping();
});


var players = [];

for (let x=1;x<=8;x++) {
 players.push(new Player({num:x, name:"Player "+x}));
 players[x-1].mount(document.body);
}

//var player = new player(1);
//
//
deck.mount($container);
var $button = document.createElement("button");
$button.setAttribute("class","btn");
$button.innerHTML="Click";
$button.onclick=function() {
 console.log("Click");
 deck.poker();
}
document.body.appendChild($button);
document.body.appendChild($container);