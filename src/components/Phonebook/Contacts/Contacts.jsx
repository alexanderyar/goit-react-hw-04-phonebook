import React from 'react'

import PropTypes from 'prop-types'
import { Filter } from './Filter/Filter'
import { ListWrapper } from './Contacts.styled'



export const Contacts = ({ contacts, filterFunc, inputValue, onDeleteClick }) => (
         <>
        <h2>Contacts</h2>
        <Filter filterFunc={filterFunc} inputValue={inputValue} />
        <ListWrapper>
        {contacts.map(({ name, id, number }) => (
            <li key={id}><p>{name}: {number}</p><button type="button" onClick={() => onDeleteClick(id)}>Delete this bastard</button></li>
         
        ))}
        </ListWrapper>
        </>
)
        

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            
        })),
    filterFunc: PropTypes.func,
    inputValue: PropTypes.string,
    onDeleteClick: PropTypes.func,
}
