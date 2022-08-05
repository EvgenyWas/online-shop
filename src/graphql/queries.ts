import { gql } from "@apollo/client";
import { PRODUCTS } from "./fragments";

export const QUERY_CATEGORIES = gql`
  query Categories {
    categories {
      name
    }
  }
`;

export const QUERY_CATEGORY_PRODUCTS = gql`
  ${PRODUCTS}
  query Category($category: String!) {
    category(input: {
      title: $category
    }) {
      name,
      products {
        ...Products
      }
    }
  }
`

export const QUERY_PRODUCT = gql`
  ${PRODUCTS}
  query Product($id: String!) {
    product(id: $id) {
      ...Product
    }
  }
`

export const QUERY_CURRENCIES = gql`
  query Currencies {
    currencies {
      label,
      symbol
    }
  }
`