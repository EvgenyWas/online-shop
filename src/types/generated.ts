import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Attribute = {
  __typename?: "Attribute";
  displayValue?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  value?: Maybe<Scalars["String"]>;
};

export type AttributeSet = {
  __typename?: "AttributeSet";
  id: Scalars["String"];
  items?: Maybe<Array<Maybe<Attribute>>>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type Category = {
  __typename?: "Category";
  name?: Maybe<Scalars["String"]>;
  products: Array<Maybe<Product>>;
};

export type CategoryInput = {
  title: Scalars["String"];
};

export type Currency = {
  __typename?: "Currency";
  label: Scalars["String"];
  symbol: Scalars["String"];
};

export type Price = {
  __typename?: "Price";
  amount: Scalars["Float"];
  currency: Currency;
};

export type Product = {
  __typename?: "Product";
  attributes?: Maybe<Array<Maybe<AttributeSet>>>;
  brand: Scalars["String"];
  category: Scalars["String"];
  description: Scalars["String"];
  gallery?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id: Scalars["String"];
  inStock?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  prices: Array<Price>;
};

export type Query = {
  __typename?: "Query";
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  product?: Maybe<Product>;
};

export type QueryCategoryArgs = {
  input?: InputMaybe<CategoryInput>;
};

export type QueryProductArgs = {
  id: Scalars["String"];
};

export type ProductPdpFragment = {
  __typename?: "Product";
  id: string;
  name: string;
  inStock?: boolean | null;
  gallery?: Array<string | null> | null;
  description: string;
  category: string;
  brand: string;
  attributes?: Array<{
    __typename?: "AttributeSet";
    id: string;
    name?: string | null;
    type?: string | null;
    items?: Array<{
      __typename?: "Attribute";
      displayValue?: string | null;
      value?: string | null;
      id: string;
    } | null> | null;
  } | null> | null;
  prices: Array<{
    __typename?: "Price";
    amount: number;
    currency: { __typename?: "Currency"; label: string; symbol: string };
  }>;
};

export type ProductPlpFragment = {
  __typename?: "Product";
  id: string;
  name: string;
  inStock?: boolean | null;
  gallery?: Array<string | null> | null;
  brand: string;
  prices: Array<{
    __typename?: "Price";
    amount: number;
    currency: { __typename?: "Currency"; label: string; symbol: string };
  }>;
};

export type CurrenciesQueryVariables = Exact<{ [key: string]: never }>;

export type CurrenciesQuery = {
  __typename?: "Query";
  currencies?: Array<{
    __typename?: "Currency";
    label: string;
    symbol: string;
  } | null> | null;
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesQuery = {
  __typename?: "Query";
  categories?: Array<{
    __typename?: "Category";
    name?: string | null;
  } | null> | null;
};

export type CategoryQueryVariables = Exact<{
  category: Scalars["String"];
}>;

export type CategoryQuery = {
  __typename?: "Query";
  category?: {
    __typename?: "Category";
    name?: string | null;
    products: Array<{
      __typename?: "Product";
      id: string;
      name: string;
      inStock?: boolean | null;
      gallery?: Array<string | null> | null;
      brand: string;
      prices: Array<{
        __typename?: "Price";
        amount: number;
        currency: { __typename?: "Currency"; label: string; symbol: string };
      }>;
    } | null>;
  } | null;
};

export type GalleryProductQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GalleryProductQuery = {
  __typename?: "Query";
  product?: {
    __typename?: "Product";
    gallery?: Array<string | null> | null;
    inStock?: boolean | null;
  } | null;
};

export type ProductQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type ProductQuery = {
  __typename?: "Query";
  product?: {
    __typename?: "Product";
    id: string;
    name: string;
    inStock?: boolean | null;
    gallery?: Array<string | null> | null;
    description: string;
    category: string;
    brand: string;
    attributes?: Array<{
      __typename?: "AttributeSet";
      id: string;
      name?: string | null;
      type?: string | null;
      items?: Array<{
        __typename?: "Attribute";
        displayValue?: string | null;
        value?: string | null;
        id: string;
      } | null> | null;
    } | null> | null;
    prices: Array<{
      __typename?: "Price";
      amount: number;
      currency: { __typename?: "Currency"; label: string; symbol: string };
    }>;
  } | null;
};

export const ProductPdpFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductPDP" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Product" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "inStock" } },
          { kind: "Field", name: { kind: "Name", value: "gallery" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "category" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "attributes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayValue" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "brand" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "prices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currency" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "symbol" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductPdpFragment, unknown>;
export const ProductPlpFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductPLP" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Product" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "inStock" } },
          { kind: "Field", name: { kind: "Name", value: "gallery" } },
          { kind: "Field", name: { kind: "Name", value: "brand" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "prices" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "amount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "currency" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "symbol" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductPlpFragment, unknown>;
export const CurrenciesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Currencies" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currencies" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "symbol" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CurrenciesQuery, CurrenciesQueryVariables>;
export const CategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Categories" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "categories" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Category" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "category" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "title" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "category" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "products" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "ProductPLP" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProductPlpFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<CategoryQuery, CategoryQueryVariables>;
export const GalleryProductDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GalleryProduct" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "product" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "gallery" } },
                { kind: "Field", name: { kind: "Name", value: "inStock" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GalleryProductQuery, GalleryProductQueryVariables>;
export const ProductDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Product" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "product" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "ProductPDP" },
                },
              ],
            },
          },
        ],
      },
    },
    ...ProductPdpFragmentDoc.definitions,
  ],
} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;
