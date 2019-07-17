import React from 'react';
import Header from './Header';
import Textbox from './Textbox';
import './style.scss';

class Hello extends React.Component {
 
  render() {
    return (
      <div className="main">
        <Header />
        <Textbox />
      </div>
    )
  }
}

export default Hello;