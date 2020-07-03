import React from 'react';
import { string, arrayOf, exact, func } from 'prop-types';

import styles from '../ContactList/ContactList.module.scss';

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => <li key={id}> {name}: {number}
        <section >
          <button type="submit" className={styles.button} onClick={() => onRemove(id)}>Delete</button>
        </section>
      </li>)
      }
    </ul>
  )
};

ContactList.defaultProps = {};

ContactList.propTypes = {
  contacts: arrayOf(exact({
    id: string.isRequired,
    name: string.isRequired,
    number: string.isRequired,
  })).isRequired,
  onRemove: func.isRequired,
};

export default ContactList;
