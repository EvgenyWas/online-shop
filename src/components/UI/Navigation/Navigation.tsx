import { Component } from 'react';
import { QUERY_CATEGORIES } from '../../../graphql/queries';
import { injectQuery } from '../../../hocs/injectQuery';
import NavigationItem from './NavigationItem';
import { StyledNavigation, StyledNavigationList } from './styles';

class Navigation extends Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    const categories = this.props.data.data?.categories;

    return (
      <StyledNavigation>
        <StyledNavigationList>
          {categories?.map((category: any) => {
            return (
              <NavigationItem
                key={category.name}
                category={category.name}
                active={true}
              />
            )
          })}
        </StyledNavigationList>
      </StyledNavigation>
    )
  }
}

export default injectQuery(Navigation, QUERY_CATEGORIES);