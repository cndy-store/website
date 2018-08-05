import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <span>
          <a href="http://cndy.store">CNDY</a> &copy; 2018 &nbsp;
          <a href="https://www.iubenda.com/privacy-policy/63674794">
            Data Protection Policy
          </a>
        </span>
        <span className="ml-auto">Stay sweet! ❤🍭</span>
      </footer>
    );
  }
}

export default Footer;
