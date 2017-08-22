"use strict";

const { expect } = require("chai");
const { test } = require("../index");

describe("Sample test", function() {
  it("should return true", function() {
    const data = true;
    const res = test(data);

    expect(res).to.equal(true);
  });

  it("should return false", function() {
    const data = false;
    const res = test(data);

    expect(res).to.equal(false);
  });
});
