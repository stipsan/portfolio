import { createClient } from "next-sanity";
import { config } from "./config";

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Helper function for easily switching between normal client and preview client
export const getClient = () => sanityClient;
