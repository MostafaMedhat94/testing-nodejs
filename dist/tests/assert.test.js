"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = require("chai");

var _sinon = _interopRequireDefault(require("sinon"));

var _app = _interopRequireDefault(require("../controllers/app"));

var _this = void 0;

var user = {
  addUser: function addUser(name) {
    _this.name = name;
  }
};
describe("getIndexPage", function () {
  it("should return index page", function () {
    var req = {};
    var res = {
      send: _sinon.default.spy()
    };

    _app.default.getIndexPage(req, res); // console.log(res.send);


    (0, _chai.expect)(res.send.calledOnce).to.be.true;
    (0, _chai.expect)(res.send.firstCall.args[0]).to.equal("bla");
  });
});
describe("User", function () {
  describe("addUser", function () {
    it("should add a user", function () {
      _sinon.default.spy(user, "addUser"); // lets log `addUser` and see what we get


      console.log(user.addUser);
    });
  });
});