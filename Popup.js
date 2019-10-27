import React from 'react';
import './style.scss';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <hr />
          <div style={{float:"right",display:"inline-block"}}>
        <button onClick={this.props.closePopup}>close me</button>
         <button onClick={this.props.closePopup}>close me</button>
        </div>
        </div>
      </div>
    );
  }
}


export default Popup;