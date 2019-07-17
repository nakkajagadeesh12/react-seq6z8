import React from 'react';
import Popup from 'react-popup';


export default class Popup extends React.Component{
render(){
  return(
    <div>
    {console.log("hello")}
    <Popup 
    text='Your order has been Rescheduled successfully'
    />
    </div>
  )
}
}