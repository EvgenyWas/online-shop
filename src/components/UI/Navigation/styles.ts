import styled from "styled-components";
import { navigationItemFragment } from "../../../styles/fragments";

export const StyledNavigation = styled.nav`
    display: flex;
    flex-basis: 33%;
`

export const StyledNavigationList = styled.ul`
    display: flex;

    & .nav-item--active {
        color: ${({ theme }) => theme.colors.green};
        border-bottom: 2px solid ${({ theme }) => theme.colors.green};
    }
`

export const StyledNavigationItem = styled.li`
    padding: 4px 16px 30px 16px;
    ${navigationItemFragment}
    border-bottom: 2px solid transparent;
    cursor: pointer;
`