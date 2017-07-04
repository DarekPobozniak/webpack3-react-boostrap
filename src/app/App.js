import React, { Component } from 'react';

import Header from '../header/Header';

import './styles.scss';

export default class App extends Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <div>
        <Header
          title="Hello world"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium excepturi, delectus
          facere aliquam quia minima! Tempore nisi, earum eveniet, harum at omnis. Vero ducimus
          maiores, dolore molestiae quam dicta consequuntur.
        </p>
      </div>
    );
  }
}
