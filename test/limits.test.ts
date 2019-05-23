import "../src/limits";
import * as chai from "chai";

describe("Array limits", () => {
  chai.should();

  function limitedArray() {
    const array = [0, 0, 0, 0];
    
    array.limit(4);

    return array.push(1);
  }

  it("should be able to add limit to an array", () => {
    limitedArray.should.throw(RangeError);
  });

  it("should return array's available space", () => {
    const arr = [0, 0, 0];

    arr.limit(4);

    arr.availableSpace().should.eq(1);
  });
});
