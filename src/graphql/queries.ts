import { gql } from "@apollo/client";
import { PRODUCT_PDP, PRODUCT_PLP } from "./fragments";

export const QUERY_CATEGORIES = gql`
  query Categories {
    categories {
      name
    }
  }
`;

export const QUERY_CATEGORY_PRODUCTS = gql`
  ${PRODUCT_PLP}
  query Category($category: String!) {
    category(input: {
      title: $category
    }) {
      name,
      products {
        ...ProductPLP
      }
    }
  }
`

export const QUERY_PRODUCT = gql`
  ${PRODUCT_PDP}
  query Product($id: String!) {
    product(id: $id) {
      ...ProductPDP
    }
  }
`

export const QUERY_GALLERY_PRODUCT = gql`
  query GalleryProduct($id: String!) {
    product(id: $id) {
      gallery,
      inStock
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