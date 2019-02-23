import React, { Component, Fragment } from 'react';
import { Header, Footer} from './components/Layouts';
import Exercises from './components/Exercises';
import './App.css';



export default class extends Component {
  render () {
    return <Fragment>
      <Header />
      <Exercises />
      <Footer />
    </Fragment>
  }
};
