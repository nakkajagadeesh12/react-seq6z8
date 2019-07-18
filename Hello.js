import React from 'react';
import Header from './Header';
import Form from './Form';
import Form1 from './Form1';
import './style.scss';

class Hello extends React.Component {
 
  render() {
    return (
      <div className="main">
        <Header />
        <Form1 />
      </div>
    )
  }
}

export default Hello;