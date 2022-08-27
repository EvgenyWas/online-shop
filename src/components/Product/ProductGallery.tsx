import { PureComponent } from "react";
import
  {
    StyledActivePicture,
    StyledActivePictureBox,
    StyledGalleryContainer,
    StyledGalleryPicture,
    StyledProductGallery
  } from "./styles";
import { TProductGalleryProps, TProductGalleryState } from "./types";

export default class ProductGallery extends PureComponent<
  TProductGalleryProps,
  TProductGalleryState
> {
  constructor(props: TProductGalleryProps) {
    super(props);
    this.state = {
      activePicture: "",
    };
  }

  componentDidUpdate(prevProps: TProductGalleryProps) {
    if (prevProps.gallery !== this.props.gallery) {
      this.setState({
        activePicture: this.props.gallery![0]
      })
    }
  }

  handleClick = (picture: string) => {
    this.setState({
      activePicture: picture,
    });
  };

  render() {
    const { gallery, inStock } = this.props;
    const { activePicture } = this.state;

    return (
      <StyledProductGallery>
        <StyledGalleryContainer>
          {gallery?.map((picture: string) => (
            <StyledGalleryPicture
              key={picture}
              src={picture}
              alt="Picture"
              onClick={() => this.handleClick(picture)}
              active={picture === activePicture}
            />
          ))}
        </StyledGalleryContainer>
        <StyledActivePictureBox inStock={inStock as boolean}>
          <StyledActivePicture src={activePicture} alt="Product picture" />
        </StyledActivePictureBox>
      </StyledProductGallery>
    );
  }
}
