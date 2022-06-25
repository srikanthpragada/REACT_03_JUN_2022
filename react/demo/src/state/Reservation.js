import React, { useState } from 'react'

export default function Reservation() {
    const [passengers, setPassengers] = useState([
        { name: 'test1', gender: 'male', age: 10, selected: false },
        { name: 'test2', gender: 'male', age: 20, selected: false },
        { name: 'test3', gender: 'male', age: 30, selected: false }

    ])

    function addPassenger(newPassenger) {
        //console.log('Adding passenger : ' + JSON.stringify(newPassenger))
        setPassengers([...passengers, newPassenger])
    }

    function changeSelection(idx, state) {
        // console.log(idx)
        // console.log(state)
        passengers[idx].selected = state
        console.log(passengers)
        setPassengers([...passengers])
    }

    function deleteSelected() {
        console.log(passengers)
        let newList = passengers.filter((p) => !p.selected)
        setPassengers(newList)
    }

    return (
        <>
            <h1>Reservation</h1>
            <AddPassenger addPassenger={addPassenger} />
            <p></p>
            <ListPassengers
                passengers={passengers}
                changeSelection={changeSelection}
                deleteSelected={deleteSelected}
            />
        </>
    )
}

function AddPassenger(props) {
    const [passenger, setPassenger] = useState({ name: '', gender: 'male', age: '', selected: false })

    function changeValue(e) {
        let name = e.target.name
        let value = e.target.value
        setPassenger({ ...passenger, [name]: value })
    }

    function addPassengerToList(e) {
        e.preventDefault()
        props.addPassenger({ ...passenger })
    }
    return (
        <>
            <form className="bg-info">
                <h3>Add Passenger</h3>
                Name : <input type="text" name="name" value={passenger.name} onChange={changeValue} />
                Gender : <select name="gender" onChange={changeValue}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                Age : <input type="number" name="age" value={passenger.age} onChange={changeValue} />
                <button onClick={addPassengerToList}>Add</button>
            </form>
        </>
    )

}

function ListPassengers(props) {
    function changeSelection(e, idx) {
        // console.log(e)
        // console.log(idx)
        props.changeSelection(idx, e.target.checked)
    }

    function deleteSelected() {
        props.deleteSelected()
    }
    return (
        <>
            <h3>Passengers List</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.passengers.map((p, idx) =>
                            <tr key={idx}>
                                <td>{p.name}</td>
                                <td>{p.gender}</td>
                                <td>{p.age}</td>
                                <td><input
                                    type="checkbox"
                                    checked={p.selected}
                                    onChange={(e) => changeSelection(e, idx)} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <p></p>
            <button onClick={deleteSelected}>Delete</button>
        </>

    )


}