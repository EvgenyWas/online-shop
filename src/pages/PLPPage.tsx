import { Component } from 'react'
import CategoryName from '../components/UI/Titles/CategoryName'
import Products from '../components/Products/Products'
import { StyledBackgroundCover } from '../components/UI/Actions/styles'
import styled from 'styled-components'
import { CartOverlayContext, TCartOverlayContext } from '../context/CartOverlayContext'

class CategoriesPage extends Component {
  render() {
    const { isCartOverlayOpen } = this.context as TCartOverlayContext;

    return (
      <StyledSection>
        <CategoryName data={{
          data: undefined,
          currentCategory: ''
        }} />
        <Products data={{
          currentCategory: '',
          currentCurrency: '',
          products: {
            __typename: undefined,
            category: undefined
          }
        }}/>
        {isCartOverlayOpen &&
        <StyledBackgroundCover/>
        }
      </StyledSection>
    )
  }
}

CategoriesPage.contextType = CartOverlayContext;

const StyledSection = styled.section`
  position: relative;
`

export default CategoriesPage;