var app = require("../server/server");
var supertest = require("supertest")(app);
var expect = require("chai").expect;

describe("Listings", function() {
	it("getAll", function(done) {
    	supertest
	        .get("/api/Listings")
	        .expect(200)
	        .expect(function(res) {
	        	//console.log(res.body)
	        	expect(res.body).to.be.a("array");
	        	expect(res.body.length).to.be.above(1);
		        // assert(res.body.next, "Expected next link");
		    })
	        .end(done);
	});

	it("checkProps", function(done) {
    	supertest
	        .get("/api/Listings/1")
	        .expect(200)
	        .expect(function(res){
	        	var listing = res.body;
	        	expect(listing).to.have.all.keys(['id', 'name', 'description', 'createdAt', 'createdBy']);
	        })
	        .end(done);
	});
});

describe("Common", function() {
	it("404", function(done) {
		supertest
	        .get("/api/wrongurl")
	        .expect(404)
	        .end(done)
	})
})