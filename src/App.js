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

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    console.log('component did mount')
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    console.log('component will unmount')
    window.removeEventListener('scroll', this.handleScroll);

    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleScroll(event) {
    console.log('handleScroll')
    if(this._timeout) {
      clearTimeout(this._timeout);
    }
    this._timeout = setTimeout(() => {
      this._timeout = null;
      console.log('scroll stopped')
    }, 5000);

    if(this.state.scrollStatus !== 'scrolling') {
      console.log('scrolling')
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    console.log('click outside')
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      alert('You clicked outside of me!');
    }
  }

  render() {
    return (
      <div ref={this.setWrapperRef}>
        <BlueCircle/>
      </div>
    );
  }

}

export default App;
