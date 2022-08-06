import React, { Component } from 'react'
import { currentCategoryVar } from '../../../graphql/cache'
import { StyledNavigationItem } from './styles'

type Props = {
    category: string,
    active: boolean,
    handleClick: (category: string) => void,
}

export default class NavigationItem extends Component<Props> {
    // handleClick = () => currentCategoryVar(this.props.category);

    render() {
        return (
            <StyledNavigationItem className={this.props.active ? 'nav-item--active': ''} onClick={() => this.props.handleClick(this.props.category)}>
                {this.props.category.toUpperCase()}
            </StyledNavigationItem>
        )
    }
}
