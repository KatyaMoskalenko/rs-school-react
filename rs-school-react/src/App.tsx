import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import withRouter from 'components/withRouterHOC/withRouter';
import Navigation from 'components/navigation/Navigation';
import AboutUs from 'pages/AboutUs';
import Error from 'pages/Error';
import Home from 'pages/home/Home';

const WithRouterHeader = withRouter();

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <WithRouterHeader />
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
