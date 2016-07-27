var defaultListings= [
				{
					name: "Property 1",
					description: "This is the description of Property 1",
					createdBy: "User1",
					createdAt: Date.now()
				},
				{
					name: "Property 2",
					description: "This is the description of Property 2",
					createdBy: "User2",
					createdAt: Date.now()
				},
				{
					name: "Property 3",
					description: "This is the description of Property 3",
					createdBy: "User3",
					createdAt: Date.now()
				},
				{
					name: "Property 4",
					description: "This is the description of Property 4",
					createdBy: "User4",
					createdAt: Date.now()
				},
				{
					name: "Property 5",
					description: "This is the description of Property 5",
					createdBy: "User5",
					createdAt: Date.now()
				},
				{
					name: "Property 6",
					description: "This is the description of Property 6",
					createdBy: "User6",
					createdAt: Date.now()
				},

			]

module.exports = function(server) {
  // enable authentication
  var Listing = server.models.Listing;
  var Message = server.models.Message;
  Listing.count(function(err, count){
  	if (count==0) {
  		Listing.create(defaultListings);
  		Listing.find(function(err, listings){
  			Message.create([{
  				text: "My deafult message",
				user: "User1",
				createdAt: Date.now(),
				listingId: listings[0].id
  			}])
  			console.log("creating default message");
  		})
  		console.log("creating deafult list");
  	}
  })
};