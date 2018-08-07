'use strict';
import Card from './card.js';
var Deck = function () {
    var self = {
      cards:    [],
      $el:      document.createElement("div"),
      mount: (el) => {el.appendChild(self.$el);return self;}
    }
    var _suits = ["spades","clubs","hearts","diamonds"];
    for (let i=0; i < 4; i++) {
      for (let rank=1; rank < 14; rank++){
        self.cards.push(new Card(_suits[i], rank, self).toggleDraggable().toggleFlippable().mount(self.$el));
      }
    }

    return self;
};

export default Deck;