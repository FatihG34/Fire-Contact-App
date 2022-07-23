import React, { useState } from 'react'
import { TiDeleteOutline, TiEdit } from 'react-icons/ti'

const Home = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='d-flex mt-1 gap-2'>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Email address</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tel" className="form-label">Telephone</label>
                        <input type="tel" className="form-control" id="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                        <select className="form-select" aria-label="Default select example">
                            <option defaultChecked>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
            <div className='container'>
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><TiDeleteOutline /></td>
                            <td><TiEdit /> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Home