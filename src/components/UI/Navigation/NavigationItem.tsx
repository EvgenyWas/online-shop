import { Component } from "react";
import { Link } from "react-router-dom";
import { StyledNavigationItem } from "./styles";

type Props = {
  category: string;
  active: boolean;
  handleClick: (category: string) => void;
};

export default class NavigationItem extends Component<Props> {
  render() {
    return (
      <Link to="/products">
        <StyledNavigationItem
          className={this.props.active ? "nav-item--active" : ""}
          onClick={() => this.props.handleClick(this.props.category)}
        >
          {this.props.category.toUpperCase()}
        </StyledNavigationItem>
      </Link>
    );
  }
}
