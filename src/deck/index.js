'use strict';

var Deck = (function () {
    var suits = ["Spades","Clubs","Hearts","Diamonds"];
    var Card = function(suit, rank) {
      var $el = document.createElement("div");
      $el.setAttribute("class",`card ${suit} rank${rank}`)
      var self = {
        suit:suit, 
        rank:rank,
        $el: $el,
        mount: (el) => el.appendChild($el)
      };

      return self;
    }
    var cards = [];
    for (let i=0; i < 4; i++) {
      for (let rank=1; rank < 14; rank++){
        cards.push(new Card(suits[i], rank));
      }
    }
  function Deck() {
    return {
      cards:cards
    }

  }
  return Deck;
})();

module.exports = Deck;