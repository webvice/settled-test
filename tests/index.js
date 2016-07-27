var listingsReducer = require("../client/reducers/listings");
var assert = require("assert");
var expect = require("chai").expect;

describe("Messages", function() {
    it("add", function() {
        //assert(someModule.doesSomeThing());
    });
});

describe("Listing Reducer", function() {
    it("create", function() {
    	var newState = listingsReducer([], {
    		type:"LISTINGS_REQUEST"
    	});
        expect(newState.loading, true);
        expect(newState.data, []);
    });
    it("list", function(){

    })
});