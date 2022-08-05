import React, { Component } from 'react'
import CategoryName from '../components/Products/CategoryName'
import Products from '../components/Products/Products'

export default class CategoriesPage extends Component {
  render() {
    return (
        <div>
          <CategoryName/>
          <Products/>
        </div>
    )
  }
}
