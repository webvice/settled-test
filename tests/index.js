var listingsReducer = require("../client/reducers/listings");
var messagesReducer = require("../client/reducers/messages");
var assert = require("assert");
var expect = require("chai").expect;

describe("Messages Reducer", function() {
    it("add request", function() {
        var dummyState ={ 
            data: []
        };
        var newState = messagesReducer(dummyState, {
            type:"MESSAGE_ADD_REQUEST"
        });
        expect(newState.loading, true);
        expect(dummyState.data, newState.data);
    });
    it("add success", function() {
        var dummyState = {
            data: []
        }
        var message = [{
            id: 1,
            text: "dummy message text"
        }]
        var newState = messagesReducer(dummyState, {
            type:"MESSAGE_ADD_RECEIVE",
            message: message
        });
        expect(newState.loading, false);
        expect(newState.data[newState.data.length-1], message);
    });
});

describe("Listing Reducer", function() {
    it("load request", function() {
    	var newState = listingsReducer([], {
    		type:"LISTINGS_REQUEST"
    	});
        expect(newState.loading, true);
        expect(newState.data, []);
    });
    it("load success", function() {
        var listings = [{
            id: 1,
            name: "dummy name"
        }]
        var newState = listingsReducer([], {
            type:"LISTINGS_RECEIVE",
            listings: listings
        });
        expect(newState.loading, false);
        expect(newState.data, listings);
    });
});