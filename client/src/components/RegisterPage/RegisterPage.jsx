import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {postUser} from "../../redux/actions"

function RegisterPage(){
    const dispatch = useDispatch();

    const [info, setInfo] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
                <input type="text" placeholder="Correo" name="email" onChange={handleChange}></input>
                <input type="text" placeholder="Password" name="password" onChange={handleChange}></input>
                <button onClick={()=> dispatch(postUser(info))}></button>
            </div>
        </div>
    )
}

export default RegisterPage;