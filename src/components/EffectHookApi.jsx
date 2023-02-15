import React, { useState, useEffect } from 'react';

export default function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        // console.log('useEffect');
        obtenerDatos();
        },[]);

    const obtenerDatos = async () => {
        const data = await fetch ('https://jsonplaceholder.typicode.com/users')
        const users = await data.json()
        // console.log(users)
        setStudents(users)
    }

    return (
        <div>
            <h1>Estudiantes</h1>
            <ul>
                {
                    students.map(item =>(
                        <li key={item.id}>{item.name} - {item.email}</li>
                    ))
                }
            </ul>
        </div>
    )
}