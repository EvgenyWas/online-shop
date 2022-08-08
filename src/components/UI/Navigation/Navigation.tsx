import { Component } from 'react';
import { currentCategoryVar } from '../../../graphql/cache';
import { QUERY_CATEGORIES } from '../../../graphql/queries';
import { injectCategoriesQuery } from '../../../hocs/injectCategoriesQuery';
import NavigationItem from './NavigationItem';
import { StyledNavigation, StyledNavigationList } from './styles';

class Navigation extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  handleClick = (category: string) => currentCategoryVar(category)

  render() {
    const categories = this.props.data.data?.categories;
    const currentCategory = this.props.data.currentCategory;

    return (
      <StyledNavigation>
        <StyledNavigationList>
          {categories?.map((category: any) => {
            return (
              <NavigationItem
                key={category.name}
                category={category.name}
                active={category.name === currentCategory}
                handleClick={this.handleClick}
              />
            )
          })}
        </StyledNavigationList>
      </StyledNavigation>
    )
  }
}

export default injectCategoriesQuery(Navigation, QUERY_CATEGORIES);