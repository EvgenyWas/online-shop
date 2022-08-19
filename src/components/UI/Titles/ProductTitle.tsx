import { PureComponent } from "react";
import styled from "styled-components";
import { productTitleFragment } from "../../../styles/fragments";

type Props = {
  brand: string;
  name: string;
  className?: string;
};

export default class ProductTitle extends PureComponent<Props> {
  render() {
    const { brand, name, className } = this.props;

    return (
      <StyledTitleContainer className={className}>
        <StyledBrand>{brand}</StyledBrand>
        <StyledName>{name}</StyledName>
      </StyledTitleContainer>
    );
  }
}

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 43px;
`;

export const StyledBrand = styled.h2`
  ${productTitleFragment}
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;
export const StyledName = styled.h2`
  ${productTitleFragment}
`;
