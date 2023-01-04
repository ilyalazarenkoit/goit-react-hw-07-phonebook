import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import css from '../components/App.module.css';
import { selectContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>Phonebook</h2>
        <ContactForm />

        <h2 className={css.title}>Contacts:</h2>
        {contacts.length > 0 ? <Filter /> : null}
        {!contacts.length ? (
          <h2 className={css.title}>You have no contacts yet</h2>
        ) : (
          <ContactList />
        )}
      </div>
    </>
  );
};
