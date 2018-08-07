var Card = function(suit, rank, deck) {

  //public properties
  var $el = document.createElement("div");
  var isFlipped=false;

  var face = document.createElement("div");
  face.setAttribute("class","back");
  $el.appendChild(face);


  //public functions
  var toggleDraggable = (draggable) => {_isDraggable = (draggable || !_isDraggable) ? true : false; return self;}
  var toggleFlippable = (flippable) => {_isFlippable = (flippable || !_isFlippable) ? true : false; return self;}
  var mount = (el) => {el.appendChild(self.$el); return self;}
  var flip = (faceUp) => {face.setAttribute("class", (faceUp || !isFlipped) ? "face" : "back"); isFlipped=!isFlipped; return self;}

  
 
  //internal properties
  var _isDraggable=false,
      _isResizable=false,
      _isFlippable=false;

  //apply styles
  $el.setAttribute("class",`card ${suit} rank${rank}`);

  //event handlers
      document.body.addEventListener('touchmove', (event) => {event.preventDefault();}, false);
      //var stage = face;
      var mc = new Hammer($el);
      mc.get('pinch').set({ enable: true })
      mc.get('rotate').set({ enable: true })
      var adjustScale = 1;
      var currentScale = null;
      var currentRotation = null;
      var adjustRotation = 0;
      mc.on("tap", function (argument) {
        if (!_isFlippable) return false;
        flip();
      })
      var adjustDeltaX = 0;
      var adjustDeltaY = 0;
      var currentDeltaX = null;
      var currentDeltaY = null;
      //mc.on("tap", (ev) => { return (!_isFlippable) ? false : flip();});
      mc.on("pinch pan rotate", function(e) {
        console.log(e.scale);
        var transforms = [];
        // var rotation = currentRotation + Math.round(e.rotation);

        currentRotation = adjustRotation + Math.round(e.rotation);
        currentScale = adjustScale * e.scale;
        currentDeltaX = adjustDeltaX + (e.deltaX / currentScale);
        currentDeltaY = adjustDeltaY + (e.deltaY / currentScale);

        transforms.push('scale(' + currentScale + ')');
        transforms.push('translate(' + currentDeltaX + 'px,' + currentDeltaY + 'px)');
        transforms.push('rotate('+currentRotation+'deg)');
        $el.style.transform = transforms.join(' ');

      })

      mc.on("panend pinchend rotateend", function(e) {
        adjustScale = currentScale;
        adjustRotation = currentRotation;
        adjustDeltaX = currentDeltaX;
        adjustDeltaY = currentDeltaY;
      })

    //return class
    var self = {
      $el:                $el,
      suit:               suit,
      rank:               rank,
      deck:               deck,
      mount:              mount,
      isFlipped:          isFlipped,   
      toggleDraggable:    toggleDraggable,
      toggleFlippable:    toggleFlippable,
      flip:               flip
    }
    return self;
}

module.exports = Card;