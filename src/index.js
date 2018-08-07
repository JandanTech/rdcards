 import _ from 'lodash';
 import Card from './model/card.js';
 import Deck from './model/deck.js';
 import './app.css'
import Hammer from "hammerjs"
import TouchEmulator from "hammer-touchemulator"
TouchEmulator();
var deck = new Deck();
deck.mount(document.getElementById("container"));
console.log(deck);

for (let i = 0; i<deck.cards.length;i++) {
	//deck.cards[i].mount();
} 

document.getElementById("btnFan").addEventListener("click", function(event) {
	for (let i = 0; i<deck.cards.length;i++) {
		deck.cards[i].$el.setAttribute("style", `margin-left:${i}px` );
	}
})

