import React, { useEffect, useState } from 'react'
import { TiDeleteOutline, TiEdit } from 'react-icons/ti'
import { writeUserData, getData } from '../firebase/firebase';

const Home = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [user, setUser] = useState([])

    let userId = new Date().getTime();
    const handleSubmit = (e) => {
        e.preventDefault();
        writeUserData(userId, name, phone, gender)
        setName('');
        setPhone('');
        setGender('Gender')
        // getData(setUser, userId)
    }
    useEffect(() => {
        getData(setUser, userId)
    }, [])
    console.log(user);
    return (
        <div className='d-flex mt-1 gap-5 m-1'>
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
                        {[user]?.map((item, index) => {
                            const { gender, phone, username } = item;
                            console.log(username);
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.username}</th>
                                    <td>{item.phone}</td>
                                    <td>{item.gender}</td>
                                    <td className='text-center'><TiDeleteOutline /></td>
                                    <td className='text-center'><TiEdit /> </td>
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