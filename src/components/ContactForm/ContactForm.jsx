import React, { Component } from 'react';

import { func } from 'prop-types';

import styles from './ContactForm.module.scss';

class ContactForm extends Component {

  static propTypes = {
    onAddContact: func.isRequired,
  };
  static defaulProps = {};

  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  }


  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.name}>Name
          <input type="text" name="name" className={styles.input} value={name} onChange={this.handleChange} />
        </label>
        <label className={styles.name}>Namber
          <input type="text" name="number" className={styles.input} value={number} onChange={this.handleChange} />
        </label>
        <button type="submit" className={styles.button} >Add contact</button>
      </form>
    );
  }
}

export default ContactForm;


