import { Component } from "react";
import Navigation from "../UI/Navigation/Navigation";
import { StyledNavbar } from "./styles";
import iconLogo from "../../assets/icons/nav/icon-logo.svg";
import Actions from "../UI/Actions/Actions";

class Navbar extends Component {
  render() {
    return (
      <StyledNavbar className="container">
        <Navigation
          data={{
            data: undefined,
            currentCategory: "",
          }}
        />
        <img src={iconLogo} alt="Logotype" className="navbar__logo" />
        <Actions />
      </StyledNavbar>
    );
  }
}

export default Navbar;
