import React, { Component } from 'react';
import Iframe from 'react-iframe';

import BlueCircle from './components/BlueCircle';

class App extends Component {
  render() {
    return (
      <div>
        <Iframe url='https://kubernetes.io' />
        <div className='bottom-left'>
          <BlueCircle/>
        </div>
      </div>
    );
  }
}

export default App;
