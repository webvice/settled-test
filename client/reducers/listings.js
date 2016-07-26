var defaultListings= [
				{
					id: "1",
					name: "Property 1",
					description: "This is the description of Property 1",
					createdBy: "User1",
					createdAt: Date.now()
				},
				{
					id: "2",
					name: "Property 2",
					description: "This is the description of Property 2",
					createdBy: "User2",
					createdAt: Date.now()
				},
				{
					id: "3",
					name: "Property 3",
					description: "This is the description of Property 3",
					createdBy: "User3",
					createdAt: Date.now()
				},
				{
					id: "4",
					name: "Property 4",
					description: "This is the description of Property 4",
					createdBy: "User4",
					createdAt: Date.now()
				},
				{
					id: "5",
					name: "Property 5",
					description: "This is the description of Property 5",
					createdBy: "User5",
					createdAt: Date.now()
				},
				{
					id: "6",
					name: "Property 6",
					description: "This is the description of Property 6",
					createdBy: "User6",
					createdAt: Date.now()
				},

			]

const listings = (state=defaultListings, action) => {
	switch(action.type){
		// case 'LIST_ALL' : 
		// 	return [...state, listings];

		default:
			return state;
	}
}

export default listings