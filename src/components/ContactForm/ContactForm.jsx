import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from '../../redux/contact/contactsApi';
import style from '../ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading, error }] = useAddContactMutation();

  const onSubmitForm = async e => {
    e.preventDefault();

    const isAdded = contacts.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (isAdded) {
        alert(`${name} is already in contacts `);
        return;
      }
    try {
      await addContact({ name, number });
      setName('');
      setNumber('');
    } catch {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <label className={style.label}>
        Name
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.addBtn} type="submit" disabled={isLoading}>
        Add contact
      </button>
    </form>
  );
}

