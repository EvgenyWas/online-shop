import { Component } from 'react'
import styled from 'styled-components'
import ProductBar from '../components/Product/ProductBar'
import ProductGallery from '../components/Product/ProductGallery'
import { currentProductVar } from '../graphql/cache'

export default class PDPPage extends Component {
  render() {
    const productId = currentProductVar();

    return (
      <StyledPDPPage className='container'>
        <ProductGallery id={productId} />
        <ProductBar id={productId} />
      </StyledPDPPage>
    )
  }
};

const StyledPDPPage = styled.section`
  display: flex;
  gap: 100px;
`