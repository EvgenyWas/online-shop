import { Component } from 'react';
import SwitchArrowButton from '../UI/Buttons/SwitchArrowButton';
import { StyledButtonsContainer, StyledGallery, StyledGalleryImage, StyledSwitchBackButton } from './styles';
import { TGalleryProps, TGalleryState } from './types';

class CartGallery extends Component<TGalleryProps, TGalleryState> {
    constructor(props: TGalleryProps) {
        super(props)
        this.state = {
            currentImageUrl: '',
            currentImageNumber: 0
        }
        this.handleSwitchNext = this.handleSwitchNext.bind(this)
        this.handleSwitchBack = this.handleSwitchBack.bind(this)
    }

    componentDidMount() {
        this.setState({
            currentImageUrl: this.props.gallery[this.state.currentImageNumber]
        })
    }

    handleSwitchNext() {
        const galleryLength = this.props.gallery.length;

        if (this.state.currentImageNumber === (galleryLength - 1)) {
            this.setState({
                currentImageUrl: this.props.gallery[0],
                currentImageNumber: 0
            })
        } else {
            this.setState(prevState => {
                const nextImageNumber = prevState.currentImageNumber + 1;

                return {
                    currentImageUrl: this.props.gallery[nextImageNumber],
                    currentImageNumber: nextImageNumber
                }
            })
        }
    }

    handleSwitchBack() {
        const galleryLength = this.props.gallery.length;

        if (this.state.currentImageNumber === 0) {
            const lastImageNumber = galleryLength - 1;

            this.setState({
                currentImageUrl: this.props.gallery[lastImageNumber],
                currentImageNumber: lastImageNumber
            })
        } else {
            this.setState(prevState => {
                const previousImageNumber = prevState.currentImageNumber - 1;

                return {
                    currentImageUrl: this.props.gallery[previousImageNumber],
                    currentImageNumber: previousImageNumber
                }
            })
        }
    }

    render() {
        return (
            <StyledGallery>
                <StyledGalleryImage 
                    src={this.state.currentImageUrl} 
                    alt={`Picture of the ${this.props.name}`}
                />
                <StyledButtonsContainer>
                    <StyledSwitchBackButton onSwitch={this.handleSwitchBack}/>
                    <SwitchArrowButton onSwitch={this.handleSwitchNext}/>
                </StyledButtonsContainer>
            </StyledGallery>
        );
    }
}

export default CartGallery;