import React, { useEffect, useState } from 'react';
import "./Header.css";
import { Link, useNavigate } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_LOGIN_API_URL;

const Headerone = () => {

    const [userInfo, setUserInfo] = useState('');
    let navig = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem('logToken') != null) {
            fetch(`${baseUrl}/userinfo`, {
                method: 'GET',
                headers: {
                    'x-access-token': sessionStorage.getItem('logToken')
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setUserInfo(data)
                })
        }
    }, [])

    const LogoutHandler = () => {
        sessionStorage.removeItem('logToken');
        sessionStorage.removeItem('userData');
        setUserInfo('');
        navig('/');
    }

    const Logical = () => {
        if (userInfo) {
            if (userInfo.name) {
                sessionStorage.setItem('userData', JSON.stringify(userInfo))
                return (
                    <>
                        <div className='m-3'>
                            <Link to='/register' className='btn btn-primary me-3'>
                                <i class="fa-solid fa-user-plus"></i> Hi {userInfo.name}
                            </Link>&nbsp;
                            <button onClick={LogoutHandler} className='btn btn-success'>
                                <i class="fa-solid fa-right-to-bracket"></i> Log out
                            </button>

                        </div>
                    </>
                )
            }

        } else {
            return (
                <>
                    <div className='m-3'>
                        <Link to='/register'>
                            <button className='btn btn-primary me-3'><i class="fa-solid fa-user-plus"></i> SignUp</button>

                        </Link>
                        <Link to='/login' className='btn btn-success'>
                            <i class="fa-solid fa-right-to-bracket"></i> Login
                        </Link>

                    </div>
                </>
            )
        }
    }
    return (
        <header className='head'>
            <section className='d-flex justify-content-between'>
                <Link to='/'>
                    <div className='mt-3 p-2'>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomatoPhoto" width={150} />
                    </div>
                </Link>
                {/* <p className='logo'>e!</p> */}
                {/* <div className="mt-3">
                    <button className="btn text-white me-3 ">Login</button>
                    <button className="btn text-white border border-1 border-light me-5">Create an account</button>
                </div> */}
                <Logical />
            </section>
        </header>
    )
}
export default Headerone;