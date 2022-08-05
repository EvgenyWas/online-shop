import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CategoriesPage from './pages/CategoriesPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <CategoriesPage/>
      </div>
    );
  }
}

export default App;
