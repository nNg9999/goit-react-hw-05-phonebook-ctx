import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState(state => ({ isOpen: !state.isOpen }));

  render() {
    return this.props.children({
      isOpen: this.state.isOpen,
      onToggle: this.toggle,
    });
  }
}

export default Toggler;