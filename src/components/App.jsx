import { nanoid } from 'nanoid';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import { useDispatch, useSelector } from 'react-redux';

import { filter } from '../redux/sliceFilter';
import { myContactSelector } from 'redux/selector';
import { useEffect } from 'react';
import { contactsAddThunk, contactsThunk } from 'redux/thunk';


const App = function () {
  const { contactApi } = useSelector(myContactSelector);
  console.log('contactApi', contactApi)
  const dispatch = useDispatch();
const {isLoading, error,contactsApi} = useSelector(state=>state.contactApi)

  useEffect(() => { dispatch(contactsThunk()) }, [dispatch])
  
  const addContact = props => {
    const { name, number } = props;
    if (contactApi) {
      const check = contactApi.contactsApi.find(
        el => el.name.toLowerCase() === name.toLowerCase()
      );
      if (check) {
        return alert('NoNoNo');
      }
  
      dispatch(contactsAddThunk({ name, number, id: nanoid() }));
    }
  };

  const filterContact = e => {
    if (e.target.value) {
      const filterSelector = contactsApi.filter(el =>
        el.name.includes(e.target.value)
      );
      dispatch(filter(filterSelector));
    } else {
      dispatch(filter([]));
    }
  };

  

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
  
      {isLoading&&<h2>Loading...</h2>}
      <Form  addContact={addContact}/>
      <Filter filterContact={filterContact} />

      {error?error.message:<Contact  />}
    
    </div>
  );
};

export default App;
