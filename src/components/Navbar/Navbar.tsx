import { PureComponent } from "react";
import styled from "styled-components";
import iconLogo from "../../assets/icons/nav/icon-logo.svg";
import Actions from "../UI/Actions/Actions";
import Navigation from "../UI/Navigation/Navigation";

class Navbar extends PureComponent {
  render() {
    return (
      <StyledNavbar className="container">
        <Navigation
          data={{
            data: undefined,
            currentCategory: "",
          }}
        />
        <img src={iconLogo} alt="Logotype" />
        <Actions />
      </StyledNavbar>
    );
  }
}

const StyledNavbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px !important;
`;

export default Navbar;
