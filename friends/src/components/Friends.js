import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../util/axiosWithAuth';
import axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 50%;
    font-size: medium;
    color: #282c34;
    margin-bottom: 1%;
    margin-top: 1%;
    text-align: center;
`

const Friends = () => {
    const [ friendsList, setFriendsList ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/friends')
            .then(res => setFriendsList(res.data))
            .catch(err => console.log(err))
    }, []);


  return (
    <>
        {friendsList.map((item) => {
            return (
            <Card key={item.id}>
                <h3>{item.name}</h3>
                <p>age: {item.age}</p>
                <p>email: {item.email}</p>
            </Card>
            )    
        })}
    </>
  );
}

export default Friends;