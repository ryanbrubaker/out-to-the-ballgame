// Generated by CoffeeScript 1.3.1
(function() {

  ottb.Cache = (function() {

    Cache.name = 'Cache';

    function Cache() {
      this.gameCache = new Object;
    }

    Cache.prototype.addGames = function(games) {
      var game, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = games.length; _i < _len; _i++) {
        game = games[_i];
        _results.push(this.gameCache[game.id] = game);
      }
      return _results;
    };

    Cache.prototype.getGame = function(gameId) {
      return this.gameCache[gameId];
    };

    return Cache;

  })();

}).call(this);