import React, { useEffect, useRef, useState } from 'react'
import { TiDeleteOutline, TiEdit } from 'react-icons/ti'
import {
    // writeUserData, getData, 
    getUsers, addUser, updateUser, deleteUser
} from '../firebase/firebase';

const Home = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [user, setUser] = useState([]);
    const [edit, setEdit] = useState(true);
    const [itemId, setItemId] = useState()
    const inputEdit = useRef()


    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(name, phone, gender)
        setName('');
        setPhone('');
        setGender('Gender')
        getUsers(setUser)
    }
    const upDateUser = (itemid) => {
        setEdit(!edit)
        setItemId(itemid)
        inputEdit.current.focus()
    }
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        updateUser(itemId, name, phone, gender);
        setEdit(!edit)
        getUsers(setUser)
    }
    const deleteUserItem = (id) => {
        deleteUser(id);
        getUsers(setUser)
    }
    useEffect(() => {
        getUsers(setUser)
    }, [])
    console.log(user);
    return (
        <div className='d-flex mt-1 gap-4 m-1'>
            {edit ?
                <div className='container bg-info'>
                    <form onSubmit={handleSubmit} className='d-flex flex-column p-2'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tel" className="form-label">Telephone</label>
                            <input type="tel" className="form-control" id="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <select className="form-select" aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
                            <option defaultValue={''}>Gender</option>
                            <option value={'Male'}>Male</option>
                            <option value={"Female"}>Female</option>
                        </select>

                        <button type="submit" className="btn btn-primary mt-4">Add</button>
                    </form>
                </div>
                :
                <div className='container bg-info'>
                    <form onSubmit={handleSubmitEdit} className='d-flex flex-column p-2'>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" ref={inputEdit} className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tel" className="form-label">Telephone</label>
                            <input type="tel" className="form-control" id="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>

                        <select className="form-select" aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
                            <option defaultValue={''}>Gender</option>
                            <option value={'Male'}>Male</option>
                            <option value={"Female"}>Female</option>
                        </select>

                        <button type="submit" className="btn btn-primary mt-4">Edit Your Info</button>
                    </form>
                </div>
            }
            <div className='container bg-info'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user?.map((item, index) => {
                            const { gender, phone, name } = item;
                            // console.log(username);
                            return (
                                <tr key={index}>
                                    <th scope="row">{name}</th>
                                    <td>{phone}</td>
                                    <td>{gender}</td>
                                    <td className='icon text-center' onClick={() => upDateUser(item.id)}><TiEdit /> </td>
                                    <td className='icon text-center' onClick={() => deleteUserItem(item.id)}><TiDeleteOutline /></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Home