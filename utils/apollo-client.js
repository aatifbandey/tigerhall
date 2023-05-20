import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `${process.env.baseUrl}`,
    cache: new InMemoryCache(),
});

export default client;