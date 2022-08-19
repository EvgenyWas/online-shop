import { PureComponent } from "react";
import { Link } from "react-router-dom";
import { StyledNavigationItem } from "./styles";

type Props = {
  category: string;
  active: boolean;
  handleClick: (category: string) => void;
};

export default class NavigationItem extends PureComponent<Props> {
  render() {
    const { category, active, handleClick } = this.props;

    return (
      <Link to="/products">
        <StyledNavigationItem
          className={active ? "nav-item--active" : ""}
          onClick={() => handleClick(category)}
        >
          {category.toUpperCase()}
        </StyledNavigationItem>
      </Link>
    );
  }
}
