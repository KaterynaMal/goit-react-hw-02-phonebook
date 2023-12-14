import React from 'react';
import css from './ContactsForm.module.css';


const Contacts = ({
  name,
  contacts,
  number,
  filter,
  handleNameChange,
  handleAddContact,
  handlePhoneChange,
    handleFilter,
    handleDeleteContact,
  
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

        <label className={css.label}>Number</label>
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
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilter}
      />

      <ul>
        {contacts.map(contact => (
          <li className={css.contact_item} key={contact.id}>
                {contact.name}: {contact.number}
                 <button type="button" className={css.delete_btn} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Contacts };
