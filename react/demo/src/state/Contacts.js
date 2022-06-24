import React, { useState } from 'react'

export default function Contacts() {
    var [contacts, setContacts] = useState([])

    function addNewContact(contact) {
        setContacts([...contacts, contact])
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
        props.addContact(contact)  
        event.preventDefault()
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