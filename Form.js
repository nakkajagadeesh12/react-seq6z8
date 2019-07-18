import React from 'react';
import './style.scss';
import Popup from './Popup';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: " ",
      slot: " ",
      change: false,
    }
  }
  changeHandler(event) {
    this.setState({
      orderId: event.target.value,
    });
  }
  handleChange(event) {
    this.setState({
      slot: event.target.value,
    });
  }
  submit() {
    this.setState({
      change: true,
    })
  }
  togglePopup() {
    this.setState({
      change: false,
    })
  }
  render() {
    return (
      <div style={{ marginLeft: "32%" }}>
        <form>
          <div>
            <input type="text"
              name="order"
              value={this.state.orderId}
              onChange={this.changeHandler.bind(this)}
              placeholder="orderid"
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <select value={this.state.slot} onChange={this.handleChange.bind(this)}>
              <option value="slots">---SLOTS---</option>
              <option value="12:35">12:35</option>
              <option value="12:40">12:40</option>
              <option value="12:45">12:45</option>
              <option value="12:50">12:50</option>
              <option value="12:55">12:55</option>
              <option value="01:00">01:00</option>
            </select>
          </div>
          <div style={{ marginTop: "30px" }}>
            <button type="button" onClick={this.submit.bind(this)}>Reschedule</button>
          </div>
        </form>
        {
          this.state.change ? <Popup
            text='Your order has been resheduled successfully'
            closePopup={this.togglePopup.bind(this)}
          /> : null
        }
        {console.log(this.state.change)}
      </div>
    )
  }
}

export default Form;