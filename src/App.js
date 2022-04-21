import React from 'react';
import './App.css';
import HeaderFooter from './components/HeaderFooter';
import Home from './components/Home';
import CardForm from './components/CardForm';

function App() {
  return (
    <div>
      <HeaderFooter>
        {/* <CardForm /> */}
        <Home />
      </HeaderFooter>
    </div>
  );
}

export default App;
