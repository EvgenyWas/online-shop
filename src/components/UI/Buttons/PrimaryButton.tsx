import { Component } from 'react';
import styled from 'styled-components';
import { primaryButtonFragment } from '../../../styles/fragments';

type Props = {
    children: string
}

export default class PrimaryButton extends Component<Props> {
    render() {
        return (
            <StyledButton>
               {this.props.children.toUpperCase()} 
            </StyledButton>
        );
    }
}

const StyledButton = styled.button`
    width: 100%;
    padding: 16px 32px;
    margin-bottom: 40px;
    ${primaryButtonFragment}
    color: ${({theme}) => theme.colors.background};
    background: ${({theme}) => theme.colors.green};
`