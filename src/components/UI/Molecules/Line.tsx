import { PureComponent } from 'react';
import styled from 'styled-components';

export default class Line extends PureComponent {
    render() {
        return (
            <StyledLine/>
        );
    }
}

export const StyledLine = styled.div`
    width: 100%;
    height: 1px;
    margin-bottom: 24px;
    background: ${({theme}) => theme.colors.backgroundGrey};
`