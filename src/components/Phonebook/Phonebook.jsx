
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


import { nanoid } from 'nanoid'

import { FormikForm } from './Form/Form'
import { Contacts } from './Contacts/Contacts'
import { PhonebookWrapper } from './Phonebook.styled'

export const Phonebook = () => {

    const randomArrayOfNames = [{id: "id-1", name: "Rosie Simpson", number: "459-12-56"},
            {id: "id-2", name: "Hermione Kline", number: "443-89-12"},
            {id: "id-3", name: "Eden Clements", number: "645-17-79"},
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" }]
    
    
    
    const [contacts, setContacts] = useState(() => {return JSON.parse(localStorage.getItem('contacts')) ?? randomArrayOfNames})
    
    const [filter, setFilter] = useState('')

    

    //adding componentDidmount, so contacts are copied from the localStorage after reloading automatically

    //this useEffect can be omitted if default value of contacts can is derived from the localstorage as default when creating useState
    // useEffect(() => {
    //     const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
    //     console.log('вызвался юзэффект при mount')
    //     if (parsedContacts) 
    //    { setContacts(parsedContacts)}
    // }, [])
    
      // adding to localstorage when "componentDidUpdate"
    useEffect(() => {
        console.log('вызвался юзэффект при апдейте contacts')
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])
    
    const updatePhoneBookList = (newContactName) => {
        console.log(newContactName)
        
        // checking if this contact new or exists in the phonebook
        const foundDuplicate = contacts.find(contact => contact.name === newContactName.name)
        if (foundDuplicate) {
            alert(`Open your eyes, ${newContactName.name} is already in your phonebook!`)
        return}
        // adding new contact name
        const contactNew = { ...newContactName, id: nanoid() }
        console.log(contactNew)

        setContacts(prevState => [...prevState, contactNew])
    }

    const handleChange = (e) => {
        console.log(e.currentTarget.value)
        
        setFilter(e.currentTarget.value)
    }
    
    const onDeleteClick = (id) => {
        
        setContacts(prevState => (prevState.filter(contact => contact.id !== id) ))

    }
    
    const filterLowered = filter.toLowerCase();
    
    

    
     const filteredContacts = contacts.filter(contact => 
            contact.name.toLowerCase().includes(filterLowered)
             )


    
    
    return (
    <PhonebookWrapper>
    <FormikForm onSubmit={updatePhoneBookList} />
    <Contacts contacts={filteredContacts} filterFunc={handleChange} inputValue={filter} onDeleteClick={onDeleteClick} />
    </PhonebookWrapper>
    )
    
}
    


Phonebook.propTypes = {
    newContactName: PropTypes.objectOf(PropTypes.string),
    id: PropTypes.string,
}
