import React, { Component } from 'react'
import { QUERY_CATEGORIES } from '../../graphql/queries'
import { injectCategoriesQuery } from '../../hocs/injectCategoriesQuery'
import { getWordFromCapitalLetter } from '../../utils/utils'
import { StyledCategoryName } from './styles'

class CategoryName extends Component<any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const currentCategory = this.props.data.currentCategory;

    return (
      <StyledCategoryName className='container'>
        {getWordFromCapitalLetter(currentCategory)}
      </StyledCategoryName>
    )
  }
};

export default injectCategoriesQuery(CategoryName, QUERY_CATEGORIES)