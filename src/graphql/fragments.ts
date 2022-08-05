import { gql } from "@apollo/client";

export const PRODUCTS = gql`
  fragment Products on Product {
    id,
    name,
    inStock,
    gallery,
    description,
    category,
    attributes {
      id,
      name,
      type,
      items {
        displayValue,
        value,
        id
      }
    },
    brand,
    prices {
      amount,
      currency {
        label,
        symbol
      }
    }
  }
`