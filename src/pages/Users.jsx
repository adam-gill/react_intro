import { useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";

function Users() {
    console.log()
    const idd = useParams().username;
    const { id } = useParams();
    const [user, setUser] = useState({});

    // what instagram would do for example
    // useEffect(() => {
    //     // fetch(`https://api.instagram.com/${username}`);
    // }, []);

    async function getUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${idd}`);
        setUser(data);
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <p>{ user.id }</p>
            <p>{ user.name }</p>
            <p>{ user.email }</p>
            <p>{ user.username }</p>
        </div>
    )
}


export default Users;