import '@babel/polyfill';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
// import _ from 'lodash';
// import $ from 'jquery';
import Home from './home';
import List from './list/list2/list';
import './index.less'

// console.log(_);
// console.log($);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navcontact">
          <Route path="/" exact component={Home} />
          <Route path="/list" component={List} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
