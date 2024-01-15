const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
// This module is a middleware for Express that allows you to add a GraphQL API server to your Express application. The .graphqlHTTP part is a function provided by express-graphql which will be used to handle GraphQL requests.
const PORT = 4000;

const app = express();
// This line creates an instance of an Express application. You're basically setting up your Express framework so that you can start configuring it (like setting routes, middleware, etc.).

app.use(
	'/graphql',
	expressGraphQL({
		graphiql: true,
	})
);
// This part of the code is where you set up the GraphQL endpoint. app.use is a method to configure the middleware used by the routes of the Express application. Here, it's specifying that any requests going to /graphql should be handled by the expressGraphQL middleware.
// The expressGraphQL function is called with an object { graphiql: true }. This configuration enables GraphiQL, which is an in-browser IDE for exploring GraphQL. When graphiql is set to true, you can test your GraphQL API directly in the browser.

app.listen(PORT, () => {
	console.log('Listening');
});
