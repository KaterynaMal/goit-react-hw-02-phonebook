import { Component } from 'react';

// import { ContactForm } from './ContactForm'
import { Contacts } from './Contacts';
import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    filter: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePhoneChange = e => {
    this.setState({ number: e.target.value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please, enter name and phone number');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Contacts
          name={name}
          number={number}
          // contacts={contacts}
          contacts={filteredContacts}
          filter={filter}
          handleNameChange={this.handleNameChange}
          handleAddContact={this.handleAddContact}
          handlePhoneChange={this.handlePhoneChange}
          handleFilter={this.handleFilter}
        ></Contacts>
      </div>
    );
  }
}

// <ContactForm ... />

// <h2>Contacts</h2>
// <Filter ... />
// <ContactList ... />
