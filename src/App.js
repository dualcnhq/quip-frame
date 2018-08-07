import React, { Component } from 'react';
// import Iframe from 'react-iframe';
import BlueCircle from './components/BlueCircle';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: '',
      lastScrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.iframe = this.iframe.bind(this);
  }

  handleScroll(event) {
    if(this._timeout){ // if there is already a timeout in process cancel it
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      this._timeout = null;
      this.setState({
        scrollStatus:'scroll stopped'
      });
      console.log('scroll stopped')
    }, 5000);
    if(this.state.scrollStatus !== 'scrolling') {
      this.setState({ scrollStatus:'scrolling' });
      console.log('scrolling')
    }
  }

  iframe() {
    return {
      __html: '<iframe src="https://kubernetes.io" frameborder="0" \
                width="100%" height="900px" allowFullScreen></iframe>'
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
