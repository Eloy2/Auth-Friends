import React, { useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';

function Form() {
    const [ friendData, setFriendData ] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        setFriendData({
            ...friendData,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/friends", friendData)
            .then(res => console.log("response from Form post", res))
            .catch(err => console.log("error from Form post", err))
        setFriendData({
            name: "",
            age: "",
            email: ""
        })
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input
                type="text"
                name="name"
                placeholder="name"
                value={friendData.name}
                onChange={handleChange}
                />
                <br/>
                <input
                type="text"
                name="age"
                placeholder="age"
                value={friendData.age}
                onChange={handleChange}
                />
                <br/>
                <input
                type="text"
                name="email"
                placeholder="email"
                value={friendData.email}
                onChange={handleChange}
                />
                <br/>
                <button>Add Friend</button>
            </form>
        </>
    )
}

export default Form;