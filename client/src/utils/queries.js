import { gql } from "@apollo/client";

// Define a GraphQL query to fetch the currently authenticated user's information
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
