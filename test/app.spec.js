const assert = require('assert')
var app = require('../app.js')
// const mocha = require('mocha')
// const describe = mocha.describe
// const it = mocha.it

describe('Our App', function () {
    it('Calculates age', function() {
        // @TODO replace 20 with a call to our code
        assert.equal(app.calculateAge(), 30)
    })
})