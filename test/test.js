var assert = require('assert');
require("../couic.js");

describe("String methods ", function() {

  describe("#justifyL(n,char)", function() {
    it("should add char to the right of the string until n length", function() {
      assert.equal("hello".justifyL(10," "),"helo     ");
    });
  });

});
