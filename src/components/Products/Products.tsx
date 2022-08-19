import { Component } from 'react'
import { injectPLPReactiveVars } from '../../hocs/injectPLPReactiveVars'
import { InjectedPLPProps } from '../../hocs/types'
import { getCurrentPrice, requestProductsQuery } from '../../utils/utils'
import ProductCard from './ProductCard'
import { StyledProducts } from './styles'

class Products extends Component<InjectedPLPProps> {
  componentDidMount() {
    requestProductsQuery(this.props.data.currentCategory);
  }

  componentDidUpdate() {    
    requestProductsQuery(this.props.data.currentCategory);
  }

  render() {
    const products = this.props.data.products;
    const currentCurrency = this.props.data.currentCurrency;

    return (
      <StyledProducts className='container'>
        {products?.map(({ id, brand, name, gallery, prices, inStock }) => {
          const price = getCurrentPrice(prices, currentCurrency)?.amount as number;
          const currencySymbol = getCurrentPrice(prices, currentCurrency)?.currency.symbol as string;

          return (
            <ProductCard
              key={id}
              id={id}
              brand={brand}
              name={name}
              image={gallery![0] as string}
              price={price}
              currencySymbol={currencySymbol}
              inStock={inStock as boolean}
            />
          )
        }
        )}
      </StyledProducts>
    )
  }
};

export default injectPLPReactiveVars(Products);