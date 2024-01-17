const graphql = require('graphql');
const axios = require('axios');
const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
} = graphql;

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: { type: GraphQLID },
		firstName: { type: GraphQLString },
		age: { type: GraphQLInt },
	},
});
// Here, a new GraphQL object type is being defined and assigned to UserType. This object type will represent a User in the GraphQL schema.

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		user: {
			type: UserType,
			args: { id: { type: GraphQLID } },
			// This sets up the arguments that the user query accepts. In this case, it takes an id of type GraphQLID. This is used to fetch a specific user by their ID.
			resolve(parentValue, args) {
				return axios
					.get(`http://localhost:3000/users/${args.id}`)
					.then((response) => response.data);
				// The resolve function is where the actual data fetching logic is written. It's responsible for returning the data for the field. In this example, the function body is empty, meaning it needs to be implemented to fetch the actual user data based on the provided id.
			},
		},
	},
});
// This line is defining the root query type for the GraphQL schema. The root query is the entry point for GraphQL queries.

module.exports = new GraphQLSchema({
	query: RootQuery,
});
