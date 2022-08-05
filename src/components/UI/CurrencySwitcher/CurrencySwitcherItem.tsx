import { Component } from 'react'
import { StyledCurrencySwitcherItem } from './styles'

type Props = {
    label: string,
    symbol: string
}

export default class CurrencySwitcherItem extends Component<Props> {
  render() {
    return (
      <StyledCurrencySwitcherItem>
        {`${this.props.symbol} ${this.props.label}`}
      </StyledCurrencySwitcherItem>
    )
  }
}