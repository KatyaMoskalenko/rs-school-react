import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.scss';
import AboutUs from 'pages/AboutUs';
import Error from 'pages/Error';
import Home from 'pages/home/Home';
import Layout from 'components/layout/Layout';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<AboutUs />}></Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
