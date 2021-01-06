import React, { Component } from 'react';
import { NavigationBar } from './NavigationBar';

export default class Exhibition extends Component {

  render() {
    return (
      <div>
        <NavigationBar />
        {"this is the exhibition component"}
      </div>
    );
  }

}