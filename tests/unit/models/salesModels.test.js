const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models')
const { allSalesModel } = require('./mocks/sales.models.mock')

describe("[Model]Testing getAll sales", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Expect it returns an array", async function () {
    const result = await salesModel.getAllSales();

    expect(result).to.be.equal(allSalesModel);
  })
})

describe("[Model]Testing function that assign a date for a sale", function () {
  afterEach(function () {
    sinon.restore();
  })
  it("Testing if the function returns the sale id", async function () {
    const result = await (salesModel.saleAssign())

    expect(result).to.be.equal(3);
  })
})