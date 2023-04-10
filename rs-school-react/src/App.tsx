import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import AboutUs from 'pages/AboutUs';
import Error from 'pages/Error';
import Home from 'pages/home/Home';
import Layout from 'components/layout/Layout';
import CreateNewProduct from 'pages/create-new-product/CreateNewProduct';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<AboutUs />}></Route>
            <Route path="create" element={<CreateNewProduct />}></Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
