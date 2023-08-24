import React from 'react';
import { useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsDiv, Button } from './Contacts.styled';

import { contactsDeleteThunk } from 'redux/thunk';
const Contact = ({ filterArrContact}) => {
  const dispatch = useDispatch()
  return (filterArrContact&&filterArrContact.map(({ number, name, id }) => {
    return (
      <ContactsDiv key={id}>
        <h-
          style={{
            fontSize: '20px',
          }}
        >
          {name}
        </h->
        <h2
          style={{
            fontSize: '20px',
            marginLeft: '20px',
          }}
        >
          {number}
        </h2>
        <Button type="button" onClick={ ()=>dispatch(contactsDeleteThunk(id))}>
          Delete
        </Button>
      </ContactsDiv>
    );
  }))
};
Contact.propTypes = {};
export default Contact;
Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  props: PropTypes.array,
};
