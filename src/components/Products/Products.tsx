import { Component } from 'react'
import { QUERY_CATEGORY_PRODUCTS } from '../../graphql/queries'
import { injectQuery } from '../../hocs/injectQuery'
import ProductCard from './ProductCard'
import { StyledProducts } from './styles'

class Products extends Component<any, any> {
  constructor(props: any) {
    super(props)
  };

  render() {
    const products = this.props.data.data?.category?.products;

    return (
      <StyledProducts className='container'>
        {products?.map((product: any) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.gallery[0]}
              price={product.prices[0].amount}
              currencySymbol={product.prices[0].currency.symbol}
              inStock={product.inStock}
            />
          )
        })}
      </StyledProducts>
    )
  }
};

const queryVariable = {
  key: 'category',
  value: 'all',
}

export default injectQuery(Products, QUERY_CATEGORY_PRODUCTS, queryVariable)