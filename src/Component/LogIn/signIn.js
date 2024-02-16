import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

const baseUrl = process.env.REACT_APP_LOGIN_API_URL;

const SignIn = () => {

    let navig = useNavigate();
    const [message, setmessage] = useState('')

    const userData = {
        email: 'nirmal@gmail.com',
        password: "987654322",
    }

    const [userInfo, setUserInfo] = useState(userData);

    const DataHandler = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const checkout = () => {
        console.log(userInfo)
        fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.auth === false) {
                    setmessage(data.token)
                } else {
                    sessionStorage.setItem('logToken', data.token)
                    navig('/')
                }
            })
    }



    return (
        <>
            <Header />
            <div className="container">
                <hr />
                <div className="bg-white border border-3 border-dark-subtle">
                    <div className="bg-info">
                        <h3>Regsiter</h3>
                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <h2 style={{ color: 'red' }}>{message}</h2>

                            <div className='col-md-6 form-group'>
                                <label for="email" className='control-label'>Email</label>
                                <input className='form-control' id="email"
                                    name="email" value={userInfo.email} onChange={DataHandler} />
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="password" className='control-label'>Password</label>
                                <input className='form-control' id="password"
                                    name="password" value={userInfo.password} onChange={DataHandler} />
                            </div>


                        </div>
                       
                    </div>
                    <button className='btn btn-success' onClick={checkout}>
                            Register
                        </button>
                </div>
            </div>
        </>

    )

}

export default SignIn;