import React from 'react';
import Header from './Components/Header/Header';
import './App.css';
import Footer from './Components/Footer/Footer';
import Photos from './Components/Photos/Photos';

function App() {
  return (
    <div className="App">
      <Header/>
      <Photos/>
      <Footer/>
    </div>
  );
}

export default App;
