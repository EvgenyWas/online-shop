import { Component } from 'react'
import CategoryName from '../components/UI/Titles/CategoryName'
import Products from '../components/Products/Products'

export default class CategoriesPage extends Component {
  render() {
    return (
        <section>
          <CategoryName/>
          <Products/>
        </section>
    )
  }
}
