var Player = (function (pl) {
 var $el = document.createElement("div");
 if (!arguments) return;  
 $el.setAttribute("class", "player player" + pl.num); 
 var $label = document.createElement("div");
 $label.innerHTML=pl.name;
 $label.setAttribute("class","playerName");
 $el.appendChild($label);
 
 $el.addEventListener("dragover", function(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
 });
 $el.addEventListener("drop", function(event) {
  event.preventDefault();
  console.log(event);
 });


 var mount = function(el) {
  el.appendChild($el);
 };
 
 
 return {
  $el: $el,
  cards:[],
  mount:mount
 }
 
});

module.exports = Player;