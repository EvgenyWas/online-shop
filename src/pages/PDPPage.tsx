import { Component } from 'react'
import styled from 'styled-components'
import Product from '../components/Product/Product'
import ProductBar from '../components/Product/ProductBar'
import ProductGallery from '../components/Product/ProductGallery'
import { StyledBackgroundCover } from '../components/UI/Actions/styles'
import { CartOverlayContext, TCartOverlayContext } from '../context/CartOverlayContext'
import { currentProductVar } from '../graphql/cache'

class PDPPage extends Component {
  render() {
    const { isCartOverlayOpen } = this.context as TCartOverlayContext;

    return (
      <StyledPDPPage>
        <Product/>
        {isCartOverlayOpen &&
        <StyledBackgroundCover/>
        }
      </StyledPDPPage>
    )
  }
};

PDPPage.contextType = CartOverlayContext;

const StyledPDPPage = styled.section`
  position: relative;
`

const StyledContainer = styled.div

export default PDPPage;