import { Component } from 'react'
import { client } from '../../graphql/client'
import { QUERY_GALLERY_PRODUCT } from '../../graphql/queries'
import { StyledActivePicture, StyledActivePictureBox, StyledGalleryContainer, StyledGalleryPicture, StyledProductGallery } from './styles'
import { TProductGalleryProps, TProductGalleryState } from './types'

export default class ProductGallery extends Component<TProductGalleryProps, TProductGalleryState> {
    constructor(props: TProductGalleryProps) {
        super(props)
        this.state = {
            gallery: [],
            activePicture: '',
            inStock: true
        }
    }

    componentDidMount = async () => {
        const response = await client.query({
            query: QUERY_GALLERY_PRODUCT,
            variables: ({id: this.props.id})
        });
        this.setState({
            gallery: response.data.product.gallery,
            activePicture: response.data.product.gallery[0]
        })
    }

    handleClick = (picture: string) => {
        this.setState({
            activePicture: picture
        })
    }
            
    render() {
        const { gallery, activePicture, inStock} = this.state;

        return (
            <StyledProductGallery>
                <StyledGalleryContainer>
                    {gallery.map(picture =>
                        <StyledGalleryPicture 
                            key={picture}
                            src={picture} 
                            alt='Picture' 
                            onClick={() => this.handleClick(picture)}
                            active={picture === activePicture}
                        />
                    )}
                </StyledGalleryContainer>
                <StyledActivePictureBox inStock={inStock}>
                    <StyledActivePicture 
                        src={activePicture} 
                        alt='Picture'
                    />
                </StyledActivePictureBox>
            </StyledProductGallery>
        )
    }
}
