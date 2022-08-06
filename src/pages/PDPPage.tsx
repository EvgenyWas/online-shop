import { Component } from 'react'
import { currentProductVar } from '../graphql/cache'

export default class PDPPage extends Component {
  render() {
    return (
      <section>
        {currentProductVar()}
      </section>
    )
  }
}
