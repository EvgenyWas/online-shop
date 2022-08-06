import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import AppRouter from './router/AppRouter';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <AppRouter/>
      </Router>
    );
  }
}

export default App;
