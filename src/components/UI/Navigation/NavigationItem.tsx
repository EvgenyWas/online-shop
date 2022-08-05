import React, { Component } from 'react'
import { StyledNavigationItem } from './styles'

type Props = {
    category: string,
    active: boolean
}

export default class NavigationItem extends Component<Props> {
    render() {
        return (
            <StyledNavigationItem className={this.props.active ? 'nav-item--active': ''}>
                {this.props.category.toUpperCase()}
            </StyledNavigationItem>
        )
    }
}
