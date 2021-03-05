import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        <h1>Create a Restaurant</h1>
        <form onSubmit={this.handleOnSubmit}>
          <label for='name-field'>Name</label>
          <input id='name-field' type='text' name='name' value={this.state.text} onChange={this.handleOnChange} />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
