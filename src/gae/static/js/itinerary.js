// Generated by CoffeeScript 1.3.1
(function() {

  ottb.Itinerary = (function() {

    Itinerary.name = 'Itinerary';

    function Itinerary(callback) {
      this.itinerary = new Array;
      this.drawItineraryCallback = callback;
    }

    Itinerary.prototype.addGame = function(game) {
      this.itinerary.push(game);
      return this.drawItineraryCallback(this.itinerary);
    };

    return Itinerary;

  })();

}).call(this);
