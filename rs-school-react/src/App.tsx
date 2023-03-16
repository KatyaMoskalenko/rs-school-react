import Header from 'components/Header';
import AboutUs from 'pages/AboutUs';
import Error from 'pages/Error';
import Home from 'pages/Home';
import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
