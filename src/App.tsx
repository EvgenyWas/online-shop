import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import CartOverlayContextProvider from './context/CartOverlayContextProvider';
import AppRouter from './router/AppRouter';

class App extends React.Component {
  render() {
    return (
      <CartOverlayContextProvider>
        <Router>
          <Navbar/>
          <AppRouter/>
        </Router>
      </CartOverlayContextProvider>
    );
  }
}

export default App;
