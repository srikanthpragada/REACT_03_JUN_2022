import React, { useState } from 'react'

export default function Contacts() {
    var [contacts, setContacts] = useState([])

    function addNewContact(contact) {
        setContacts([...contacts, contact])
        //console.log(contacts)
    }

    return (
        <>
            <h2>Contacts</h2>
            <AddContact addContact={addNewContact} />
            <p></p>
            <ListContacts contacts={contacts} />
        </>
    )
}

function AddContact(props) {
    var [contact, setContact] = useState({ name: 'Srikanth', email: 'srikanth@gmail.com' })

    function changeName(event) {
        //console.log(event.target.value)
        setContact({ ...contact, name: event.target.value })
    }

    function changeEmail(event) {
        //console.log(event.target.value)
        setContact({ ...contact, email: event.target.value })
    }

    function addContact(event) {
        console.log(contact)
        props.addContact(contact)  
        event.preventDefault()

    }
    return (
        <>
            <h3>New Contact</h3>
            <form onSubmit={addContact}>
                <label htmlFor="fullname">Fullname</label>
                <br />
                <input type="text" id="fullname" value={contact.name}
                    onChange={changeName} required></input>
                <p></p>
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" id="email" value={contact.email}
                    onChange={changeEmail} required></input>
                <p></p>
                <input type='submit' value="Add"></input>
            </form>
        </>
    )
}

function ListContacts(props) {

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
                    {props.contacts.map(c =>
                        <tr>
                            <td>{c.name}</td>
                            <td>{c.email}</td>
                            <td><button>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </>
  )
}