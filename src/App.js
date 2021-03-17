import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './pages/products';
import Navbar from './components/navbar';
import About from './components/About/About';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
`;

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Main>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
