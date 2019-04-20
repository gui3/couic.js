"use strict";

(function () {
  // Objects --------------
  Object.prototype.log = function () {
    if (this.constructor.name == "Function") {
      console.log(this);
    } else {
      console.log(this.constructor(this));
    }
  };
  Object.prototype.expect = function (value, error) {
    if (this != value) {
      message = message ?
        message.constructor.name == "Error" ?
          message :
          new Error(message) :
        "expected : "+value+" instead got : "+this ;
      throw error;
    }
  };
  Object.prototype.forEach = function (callback) {
    if (this.constructor.name == "String") {
      this.split("").forEach(function (l,ix) {
        callback(l,ix);
      });
    } else if (this.constructor.name == "Object") {
      Object.keys(this).forEach(function (k,ix) {
        callback(k,this[k],ix);
      });
    }// Array.forEach not overriden
  };

  // Strings --------------
  String.prototype.justifyL = function(length, char) {
    (length%1).expect(0,"Number.upTo : expect integer, got "+length);
    (char.constructor.name).expect(
      "String","String.justifyL : expect string, got "+char);
    (char.length).expect(1,"String.justifyL : can only fill with one character");
    var j = length-this.length
    if (j > 0) {
      return this + char.repeat(j);
    } else {
      return this
    }
  };
  String.prototype.justifyR = function(length, char) {
    (length%1).expect(0,"Number.upTo : expect integer, got "+length);
    (char.constructor.name).expect(
      "String","String.justifyR : expect string, got "+char);
    (char.length).expect(1,"String.justifyR : can only fill with one character");
    var j = length-this.length
    if (j > 0) {
      return char.repeat(j) + this;
    } else {
      return this
    }
  };

  // Numbers --------------
  Number.prototype.upTo = function (end) {
    (this%1).expect(0,"Number.upTo : expect integer, got "+this);
    (end%1).expect(0,"Number.upTo : expect integer, got "+end);
    var step = this < end ? 1 : -1;
    var Iterator = (function (start, end, step) {
      function Iterator () {
        var st = start,
          e = end,
          sp = step;
        this.map = function (callback) {
          var a = [],
            ix = 0;
          callback = callback ? callback : function (i) {return i;};
          for (var i = st; sp > 0 ? i <= e : i>=e; i += sp) {
            var r = callback(i,ix);
            a.push(r);
            ix ++;
          };
          return a;
        };
        this.forEach = function (callback) {
          var ix = 0;
          for (var i = st; sp > 0 ? i <= e : i>=e; i += sp) {
            callback(i,ix);
            ix ++;
          }
        };
        Iterator.prototype[Symbol.iterator] = function() {
          var cix = st - 1,
            end = e,
            sp = step;
          return {
            next: function() {
              return {
                value: cix += sp,
                done: (sp > 0 ? cix > end : cix < end)
              };
            }
          };
        };
      };
      return new Iterator ()
    })(this, end, step);
    return Iterator ;
  };
  Number.prototype.times = function (callback = function(){}) {
    (this%1).expect(0,"Number.times : expect integer, got "+this);
    for (var i = 0; i < this; i++) {
      callback(i);
    }
  }
})();
