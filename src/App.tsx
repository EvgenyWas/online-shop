import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PLPPage from './pages/PLPPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <PLPPage />
      </div>
    );
  }
}

export default App;
