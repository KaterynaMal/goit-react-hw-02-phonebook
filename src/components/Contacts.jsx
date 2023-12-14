import React from 'react';
import css from './ContactsForm.module.css';

const Contacts = ({
  name,
  contacts,
  number,
  handleNameChange,
    handleAddContact,
  handlePhoneChange
}) => {
  return (
    <div className={css.form_container}>
      <form className={css.form}>
        <label className={css.label}>Name</label>
        <input
          className={css.input}
          type="text"
          name="name"
          required
          value={name}
          onChange={handleNameChange}
        />

        <input
          className={css.input}
          type="tel"
          name="number"
          required
          value={number}
          onChange={handlePhoneChange}
        />

        <button className={css.btn} type="button" onClick={handleAddContact}>
          Add contact
        </button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}: {contact.number}</li>
        ))}
      </ul>
    </div>
  );
};

export { Contacts };
