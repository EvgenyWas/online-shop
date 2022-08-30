import { MouseEvent, PureComponent } from "react";
import { Link } from "react-router-dom";
import { cartVar, currentProductVar } from "../../graphql/cache";
import { AttributeSet } from "../../types/generated";
import
  {
    addProductToCart,
    formatAttributes,
    getProductPDP,
    updateLocalStorageCart
  } from "../../utils/utils";
import AddToCartButton from "../UI/Buttons/AddToCartButton";
import
  {
    StyledImage,
    StyledImageBox,
    StyledName,
    StyledPrice,
    StyledProductCard
  } from "./styles";
import { TProductCardProps } from "./types";

export default class ProductCard extends PureComponent<TProductCardProps> {
  handleClick = (id: string) => currentProductVar(id);

  handleAddToCart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Request product by id and define default attributes
    const product = await getProductPDP(this.props.id);
    const attributes = formatAttributes(product.attributes as AttributeSet[]);
    const newProduct = {
      product: product,
      chosenAttributes: attributes,
      amount: 1,
    };

    cartVar({
      amount: (cartVar().amount += 1),
      order: addProductToCart(cartVar().order, newProduct),
    });
    updateLocalStorageCart(cartVar());
  };

  render() {
    const { id, brand, name, image, price, currencySymbol, inStock } =
      this.props;

    return (
      <Link to={`/product/${id}`} onClick={() => this.handleClick(id)}>
        <StyledProductCard inStock={inStock}>
          <StyledImageBox inStock={inStock}>
            <StyledImage src={image} alt={name} />
            {inStock && <AddToCartButton handleClick={this.handleAddToCart} />}
          </StyledImageBox>
          <StyledName>{`${brand} ${name}`}</StyledName>
          <StyledPrice>{`${currencySymbol}${price.toFixed(2)}`}</StyledPrice>
        </StyledProductCard>
      </Link>
    );
  }
}
