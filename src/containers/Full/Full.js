import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import ProductDescription from '../../views/ProductDescription';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Container fluid>
          <Switch>
            <Route path="/dashboard" name="Dashboard" component={Dashboard} />
            <Route path="/about" name="About" component={ProductDescription} />
            <Redirect from="/" to="/about" />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Full;
