import { Component } from 'react';


// import { ContactForm } from './ContactForm'
import { Contacts } from './Contacts';
import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

export class App extends Component {

state = {
  contacts: [],
  name: '',
  number: ''
}

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handlePhoneChange = (e) => {
    this.setState({number: e.target.value})
  }

  handleAddContact = () => {
    const { name, number, contacts } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please, enter name and phone number');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
     number: number.trim()
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
     number: ''
    }));
  };
  
  render() {
    const { contacts, name, number} = this.state;
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Contacts
          name={name}
          number={number}
          contacts={contacts}
          handleNameChange={this.handleNameChange}
          handleAddContact={this.handleAddContact}
          handlePhoneChange={this.handlePhoneChange}
        ></Contacts>

      </div>
    )
  }
}



  // <ContactForm ... />

  // <h2>Contacts</h2>
  // <Filter ... />
  // <ContactList ... />
