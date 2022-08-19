import { PureComponent } from "react";
import { getProductGallery } from "../../utils/utils";
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
      gallery: [],
      activePicture: "",
      inStock: true,
    };
  }

  componentDidMount = async () => {
    const { gallery, inStock } = await getProductGallery(this.props.id);
    this.setState({
      gallery: gallery as string[],
      activePicture: gallery![0] as string,
      inStock: inStock as boolean,
    });
  };

  handleClick = (picture: string) => {
    this.setState({
      activePicture: picture,
    });
  };

  render() {
    const { gallery, activePicture, inStock } = this.state;

    return (
      <StyledProductGallery>
        <StyledGalleryContainer>
          {gallery.map((picture) => (
            <StyledGalleryPicture
              key={picture}
              src={picture}
              alt="Picture"
              onClick={() => this.handleClick(picture)}
              active={picture === activePicture}
            />
          ))}
        </StyledGalleryContainer>
        <StyledActivePictureBox inStock={inStock}>
          <StyledActivePicture src={activePicture} alt="Picture" />
        </StyledActivePictureBox>
      </StyledProductGallery>
    );
  }
}
