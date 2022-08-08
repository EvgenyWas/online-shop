import { gql } from "@apollo/client";

export const PRODUCT_PLP = gql`
  fragment ProductPLP on Product {
    id,
    name,
    inStock,
    gallery,
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

export const PRODUCT_PDP = gql`
  fragment ProductPDP on Product {
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