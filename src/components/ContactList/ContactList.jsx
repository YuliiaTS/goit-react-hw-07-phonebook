import { useSelector } from 'react-redux';
import ContactItem from '../ContactList/ContactItem';
import style from '../ContactList/ContactList.module.css';
import { useGetContactsQuery } from '../../redux/contact/contactsApi';

export default function ContactList() {
   const { data: contacts, isLoading } = useGetContactsQuery();
   const filter = useSelector(state => state.filter);

   const visibleContacts = contacts?.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

   return (
      <ul className={style.list}>
         {isLoading ? (
                <p>Loading...</p>
            ) : 
         (visibleContacts.map(({id, name, number }) => (
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
            />
         )))}
      </ul>
)};