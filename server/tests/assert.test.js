import { expect } from "chai";
import sinon from "sinon";
import indexPage from "../controllers/app";

const user = {
    addUser: (name) => {
        this.name = name;
    },
};

describe("getIndexPage", () => {
    it("should return index page", () => {
        const req = {};

        const res = {
            send: sinon.spy(),
        };

        indexPage.getIndexPage(req, res);

        // console.log(res.send);

        expect(res.send.calledOnce).to.be.true;

        expect(res.send.firstCall.args[0]).to.equal("bla");
    });
});

describe("User", function() {
    describe("addUser", function() {
        it("should add a user", function() {
            sinon.spy(user, "addUser");

            // lets log `addUser` and see what we get
            console.log(user.addUser);
        });
    });
});
