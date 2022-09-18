import PropTypes from 'prop-types';
import style from '../ContactList/ContactList.module.css';
import { useDeleteContactMutation } from '../../redux/contact/contactsApi';

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li className={style.item} id={id}>
      {name}: {number}
      <button
        className={style.btn}
        type="button"
        onClick={() => (deleteContact(id))}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
