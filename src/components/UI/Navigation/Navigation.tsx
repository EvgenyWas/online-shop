import { Component } from "react";
import { currentCategoryVar } from "../../../graphql/cache";
import { injectCategoriesQuery } from "../../../hocs/injectCategoriesQuery";
import { InjectedCategoriesProps } from "../../../hocs/types";
import NavigationItem from "./NavigationItem";
import { StyledNavigation, StyledNavigationList } from "./styles";

class Navigation extends Component<InjectedCategoriesProps> {
  handleClick = (category: string) => currentCategoryVar(category);

  render() {
    const categories = this.props.data.data?.categories;
    const currentCategory = this.props.data.currentCategory;

    return (
      <StyledNavigation>
        <StyledNavigationList>
          {categories?.map(({ name }: any) => {
            return (
              <NavigationItem
                key={name}
                category={name}
                active={name === currentCategory}
                handleClick={this.handleClick}
              />
            );
          })}
        </StyledNavigationList>
      </StyledNavigation>
    );
  }
}

export default injectCategoriesQuery(Navigation);
