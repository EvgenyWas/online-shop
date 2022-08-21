import { PureComponent } from "react";
import SwitchArrowButton from "../UI/Buttons/SwitchArrowButton";
import
  {
    StyledButtonsContainer,
    StyledGallery,
    StyledGalleryImage,
    StyledSwitchBackButton
  } from "./styles";
import { TGalleryProps, TGalleryState } from "./types";

class CartGallery extends PureComponent<TGalleryProps, TGalleryState> {
  constructor(props: TGalleryProps) {
    super(props);
    this.state = {
      currentImageUrl: "",
      currentImageNumber: 0,
    };
    this.handleSwitchNext = this.handleSwitchNext.bind(this);
    this.handleSwitchBack = this.handleSwitchBack.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => ({
      currentImageUrl: props.gallery[state.currentImageNumber],
    }));
  }

  handleSwitchNext() {
    const { gallery } = this.props;
    const galleryLength = gallery.length;

    if (this.state.currentImageNumber === galleryLength - 1) {
      this.setState({
        currentImageUrl: gallery[0],
        currentImageNumber: 0,
      });
    } else {
      this.setState((prevState) => {
        const nextImageNumber = prevState.currentImageNumber + 1;

        return {
          currentImageUrl: gallery[nextImageNumber],
          currentImageNumber: nextImageNumber,
        };
      });
    }
  }

  handleSwitchBack() {
    const { gallery } = this.props;
    const galleryLength = gallery.length;

    if (this.state.currentImageNumber === 0) {
      const lastImageNumber = galleryLength - 1;

      this.setState({
        currentImageUrl: gallery[lastImageNumber],
        currentImageNumber: lastImageNumber,
      });
    } else {
      this.setState((prevState) => {
        const previousImageNumber = prevState.currentImageNumber - 1;

        return {
          currentImageUrl: gallery[previousImageNumber],
          currentImageNumber: previousImageNumber,
        };
      });
    }
  }

  render() {
    const { name, gallery } = this.props;
    const { currentImageUrl } = this.state;

    return (
      <StyledGallery>
        <StyledGalleryImage
          src={currentImageUrl}
          alt={`Picture of the ${name}`}
        />
        {gallery.length > 1 && (
          <StyledButtonsContainer>
            <StyledSwitchBackButton onSwitch={this.handleSwitchBack} />
            <SwitchArrowButton onSwitch={this.handleSwitchNext} />
          </StyledButtonsContainer>
        )}
      </StyledGallery>
    );
  }
}

export default CartGallery;
