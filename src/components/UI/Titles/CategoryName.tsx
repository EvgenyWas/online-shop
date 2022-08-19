import { Component } from "react";
import { injectCategoriesQuery } from "../../../hocs/injectCategoriesQuery";
import { InjectedCategoriesProps } from "../../../hocs/types";
import { getWordFromCapitalLetter } from "../../../utils/utils";
import { StyledCategoryName } from "../../Products/styles";

class CategoryName extends Component<InjectedCategoriesProps> {
  render() {
    const currentCategory = this.props.data.currentCategory;

    return (
      <StyledCategoryName className="container">
        {getWordFromCapitalLetter(currentCategory)}
      </StyledCategoryName>
    );
  }
}

export default injectCategoriesQuery(CategoryName);
