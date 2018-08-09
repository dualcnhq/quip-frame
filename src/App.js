import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import BlueCircle from './components/BlueCircle';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: '',
      lastScrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    if(this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      this._timeout = null;
      console.log('scroll stopped')
      this.getDOMElements()
    }, 5000);

    if(this.state.scrollStatus !== 'scrolling') {
      console.log('scrolling')
    }
  }

  render() {
    return ( <BlueCircle/> );
  }

}

export default App;
