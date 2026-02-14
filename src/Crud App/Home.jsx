import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3050/user')
            .then(res => setData(res.data))
            .catch(err => console.log(err)
            )
    }, [])
    return (

        <div className="container mt-5">
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>
                                <button className='btn btn-success mx-2'>Edit</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}
