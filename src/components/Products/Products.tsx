import { Component } from 'react'
import { injectPLPReactiveVars } from '../../hocs/injectPLPReactiveVars'
import { getCurrentPrice, requestProductsQuery } from '../../utils/utils'
import ProductCard from './ProductCard'
import { StyledProducts } from './styles'

class Products extends Component<any, any> {
  componentDidMount() {
    requestProductsQuery(this.props.data.currentCategory);
  }

  componentDidUpdate() {    
    requestProductsQuery(this.props.data.currentCategory);
  }

  render() {
    const products = this.props.data.products.category?.products;
    const currentCurrency = this.props.data.currentCurrency;

    return (
      <StyledProducts className='container'>
        {products?.map((product: any) => {          
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              brand={product.brand}
              name={product.name}
              image={product.gallery[0]}
              price={getCurrentPrice(product.prices, currentCurrency)?.amount as number}
              currencySymbol={getCurrentPrice(product.prices, currentCurrency)?.currency.symbol as string}
              inStock={product.inStock}
            />
          )
        })}
      </StyledProducts>
    )
  }
};

export default injectPLPReactiveVars(Products);