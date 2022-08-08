import { createRef, MouseEvent, PureComponent, RefObject } from 'react'
import styled from 'styled-components'

type Props = {
  color: string,
  active: boolean
  handleChooseSwatch: (event: MouseEvent<HTMLInputElement>) => void,
}

export default class SwatchInput extends PureComponent<Props> {
  inputRef: RefObject<HTMLInputElement> | undefined;
  constructor(props: Props) {
    super(props)

    this.inputRef = createRef()
  }

  componentDidMount() {
    if(this.props.active) {
      this.inputRef?.current?.click();
    }
  }

  render() {
    return (
      <StyledInput
        ref={this.inputRef}
        type='button'
        bachground={this.props.color}
        active={this.props.active}
        onClick={this.props.handleChooseSwatch}
      />
    )
  }
}

const StyledInput = styled.input<{ bachground: string, active: boolean }>`
  width: 32px;
  height: 32px;
  outline: 1px solid ${({theme}) => theme.colors.background};
  border: 1px solid ${({theme}) => theme.colors.acceptGrey};
  background: ${props => props.bachground};
  cursor: pointer;
  
  ${props => props.active && (({theme}) => `outline: 1px solid ${theme.colors.green} !important;`)}
`