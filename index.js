import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = ()=>{
  return(
    <div>
    <Hello />
    </div>
  )
}

render(<App />, document.getElementById('root'));
