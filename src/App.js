import React from 'react';
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';

function App() {
  return (
    <div>
      <HeaderFooter>
        <Home />
      </HeaderFooter>
    </div>
  );
}

export default App;
