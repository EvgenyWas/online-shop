import { Component } from "react";
import { localStorageKeys } from "../../../config";
import { currentCategoryVar } from "../../../graphql/cache";
import { injectCategoriesQuery } from "../../../hocs/injectCategoriesQuery";
import { InjectedCategoriesProps } from "../../../hocs/types";
import { getLocalStorageValue, setValueLocalStorage } from "../../../utils/utils";
import NavigationItem from "./NavigationItem";
import { StyledNavigation, StyledNavigationList } from "./styles";

class Navigation extends Component<InjectedCategoriesProps> {
  componentDidMount() {
    const key = localStorageKeys.user;
    const storageValue = getLocalStorageValue(key);
    const currentCategory = storageValue?.currentCategory;
    if (currentCategory) {
      currentCategoryVar(currentCategory);
    }
  }

  handleClick(category: string) {
    const key = localStorageKeys.user;
    const storageValue = getLocalStorageValue(key);

    setValueLocalStorage(key, {
      ...storageValue,
      currentCategory: category
    });
    currentCategoryVar(category);
  }

  getNavigationItems() {
    const categories = this.props.data.data?.categories;
    const currentCategory = this.props.data.currentCategory;
    const navigationItems = categories?.map(({ name }: any) => (
      <NavigationItem
        key={name}
        category={name}
        active={name === currentCategory}
        handleClick={this.handleClick}
      />
    ));

    return navigationItems;
  }

  render() {
    return (
      <StyledNavigation>
        <StyledNavigationList>
          {this.getNavigationItems()}
        </StyledNavigationList>
      </StyledNavigation>
    );
  }
}

export default injectCategoriesQuery(Navigation);
