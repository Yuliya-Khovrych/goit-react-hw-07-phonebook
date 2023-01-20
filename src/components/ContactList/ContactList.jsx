import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
