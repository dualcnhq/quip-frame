import React, { Component } from 'react';
// import Iframe from 'react-iframe';
import ReactDOM from 'react-dom';
import BlueCircle from './components/BlueCircle';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: '',
      lastScrollPos: 0,
      whitelist: ["id", "tagName", "className", "childNodes"]
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.iframe = this.iframe.bind(this);
    this.getDOMElements = this.getDOMElements.bind(this);
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

  getDOMElements() {
    const { whitelist } = this.state
    const element = ReactDOM.findDOMNode(this);
    console.log(element);

  }

  iframe() {
    const url = 'https://kubernetes.io';
    return {
      __html: `<iframe src=${url} frameborder="0" \
                width="100%" height="900px" allowFullScreen></iframe>`
    }
  }

  render() {
    return (
      <div>
        {/*<Iframe url='https://kubernetes.io' />*/}
        <div dangerouslySetInnerHTML={ this.iframe() } onScroll={this.handleScroll()}/>
        <div className='bottom-left'>
          <BlueCircle/>
        </div>
      </div>
    );
  }

}

export default App;
