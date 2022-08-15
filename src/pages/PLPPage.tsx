import { Component } from 'react'
import CategoryName from '../components/UI/Titles/CategoryName'
import Products from '../components/Products/Products'
import { StyledBackgroundCover } from '../components/UI/Actions/styles'
import styled from 'styled-components'

export default class CategoriesPage extends Component {
  render() {
    return (
      <StyledSection>
        <CategoryName/>
        <Products/>
        <StyledBackgroundCover/>
      </StyledSection>
    )
  }
}

const StyledSection = styled.section`
  position: relative;
`