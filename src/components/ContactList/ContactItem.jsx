import PropTypes from 'prop-types';
import style from '../ContactList/ContactList.module.css';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contact/actions';
import { useDeleteContactMutation } from '../../redux/contact/contactsApi';

export default function ContactItem({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <li className={style.item} id={id}>
      {name}: {number}
      <button
        className={style.btn}
        type="button"
        onClick={() => (deleteContact(id))}
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
