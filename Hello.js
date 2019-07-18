import React from 'react';
import Header from './Header';
import Form from './Form';
import './style.scss';

class Hello extends React.Component {
 
  render() {
    return (
      <div className="main">
        <Header />
        <Form />
      </div>
    )
  }
}

export default Hello;