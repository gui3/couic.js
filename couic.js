"use strict";

(function () {
  // Objects --------------
  Object.prototype.log = function () {
    if (typeof this == "function") {
      console.log(this);
    } else {
      console.log(this.constructor(this));
    }
  };
  Object.prototype.expect = function (value, message=null) {
    if (this != value) {
      message = typeof message == "string" ?
        message :
        "expected : "+value+" instead got : "+this ;
      throw new Error (message)
    }
  };
  Object.prototype.forEach = function (callback = function(){}) {
    if (typeof this.constructor(this) == "string") {
      this.split("").forEach( (l,ix) => {
        callback(l,ix);
      });
    } else if (typeof this.constructor(this) == "object") {
      Object.keys(this).forEach( (k,ix) => {
        callback(k,this[k],ix);
      });
    }
  };

  // Strings --------------
  String.prototype.justifyL = function(length, char) {
    var j = length-this.length
    if (j > 0) {
      return this + char.repeat(j);
    } else {
      return this
    }
  };
  String.prototype.justifyR = function(length, char) {
    var j = length-this.length
    if (j > 0) {
      return char.repeat(j) + this;
    } else {
      return this
    }
  };

  // Numbers --------------
  Number.prototype.upTo = function (end, callback) {
    (this%1).expect(0,"Number.upTo : expect integer, got "+this);
    (end%1).expect(0,"Number.upTo : expect integer, got "+end);
    var a = [],
      ix = 0;
    callback = callback ? callback : function (i) {return i;};
    for (var i = this; i <= end; i++) {
      var r = callback(i,ix);
      a.push(r == undefined ? r : i); // maps the array if function returns !
      ix ++;
    };
    return a;
  };
  Number.prototype.times = function (callback = function(){}) {
    (this%1).expect(0,"Number.times : expect integer, got "+this);
    for (var i = 0; i < this; i++) {
      callback(i);
    }
  }
})();
