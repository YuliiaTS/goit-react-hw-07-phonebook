import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contact/actions';
import style from '../Filter/Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label className={style.label}>
      Find contact by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
