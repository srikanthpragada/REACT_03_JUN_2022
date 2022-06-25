import React, { useState } from 'react'

export default function Contacts() {
    var [contacts, setContacts] = useState([])

    function addNewContact(contact) {
        // find out whether contact with same details is already present 
        var foundItem = contacts.find((c, idx) => c.name === contact.name && c.email === contact.email)
        if (!foundItem) {  // contact not found 
            setContacts([...contacts, contact])
            return true;
        }
        else
            return false;
            
        //console.log(contacts)
    }

    function deleteContact(idx) {
        var newContacts = contacts.filter((v,i) => i !== idx)
        setContacts (newContacts )
    }

    return (
        <>
            <h2>Contacts</h2>
            <AddContact addContact={addNewContact} />
            <p></p>
            {contacts.length > 0 ? <ListContacts contacts={contacts} deleteContact={deleteContact} /> : <h4>No Contacts!</h4>}
        </>
    )
}

function AddContact(props) {
    var [contact, setContact] = useState({ name: 'Srikanth', email: 'srikanth@gmail.com' })
    var [message, setMessage] = useState('')

    // function changeName(event) {
    //     //console.log(event.target.value)
    //     setContact({ ...contact, name: event.target.value })
    // }

    // function changeEmail(event) {
    //     //console.log(event.target.value)
    //     setContact({ ...contact, email: event.target.value })
    // }

    function updateContact(event) {
        var value = event.target.value
        var fieldname = event.target.name 
        setContact( {...contact, [fieldname] : value })
    }
    
    function addContact(event) {
        //console.log(contact)
        var done = props.addContact(contact)  
        event.preventDefault()
        
        if (!done) 
            setMessage('Contact already exists')
        else
            setMessage('')
    }

    function clearFields() {
        setContact( {name :'', email : ''})
    }
    return (
        <>
            <h3>New Contact</h3>
            <form onSubmit={addContact}>
                <label htmlFor="fullname">Fullname</label>
                <br />
                <input type="text" id="fullname" value={contact.name} name="name"
                    onChange={updateContact} required></input>
                <span className="text-danger"> {message} </span>
                <p></p>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" value={contact.email} name="email"
                    onChange={updateContact} required></input>
                <p></p>
                <input type='submit' value="Add"></input>   
                &nbsp;
                <input type="reset" onClick={clearFields} value="Clear"></input>
            </form>
        </>
    )
}

function ListContacts(props) {

    function deleteSelectedContact(idx) {
        if (window.confirm("Do you want to delete contact?"))
            props.deleteContact(idx)
    }

    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts.map( (c , idx) =>
                        <tr key={idx}>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td><button onClick={ () => deleteSelectedContact(idx)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
  )
}