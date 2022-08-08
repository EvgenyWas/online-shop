import { Component } from 'react'
import styled from 'styled-components'
import { productTitleFragment } from '../../../styles/fragments'

type Props = {
    brand: string,
    name: string,
}

export default class ProductTitle extends Component<Props> {
  render() {
    return (
      <StyledTitleContainer>
        <StyledBrand>
            {this.props.brand}
        </StyledBrand>
        <StyledName>
            {this.props.name}
        </StyledName>
      </StyledTitleContainer>
    )
  }
}

const StyledTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 43px;
`

const StyledBrand = styled.h2`
    ${productTitleFragment}
    font-weight: ${({theme}) => theme.fontWeights.semibold};
`
const StyledName = styled.h2`
    ${productTitleFragment}
`