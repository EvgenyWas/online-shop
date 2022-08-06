import { Component } from 'react';
import { Navigate, Route, Routes, } from "react-router-dom";
import PDPPage from '../pages/PDPPage';
import PLPPage from '../pages/PLPPage';

export default class AppRouter extends Component {
  render() {
    return (
      <Routes>
        <Route path='/products' element={<PLPPage/>}/>
        <Route path='/products/:id' element={<PDPPage/>}/>
        {/* <Route path='/cart' element={<CartPage/>}/> */}
        <Route path='*' element={<Navigate replace to='/products'/>}/>
      </Routes>
    )
  }
}
