import React from 'react';
// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
