import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { cache } from "./cache";

const httpLink = createHttpLink({
  uri: "http://localhost:4000",
});

export const client = new ApolloClient({
  link: httpLink,
  cache: cache,
});
