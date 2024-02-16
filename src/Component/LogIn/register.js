import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../Header'

const baseUrl = process.env.REACT_APP_LOGIN_API_URL;


const Register = () => {
    let navig = useNavigate();

    const userData = {
        name:'nirmal',
        email:'nirmal@gmail.com',
        password:"987654322",
        phone:"987654322"
    }

    const [userInfo,setUserInfo] = useState(userData);

    const DataHandler = (e) => {
        const {name,value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]:value
        })
    }

    const checkout = () => {
        console.log(userInfo)
        fetch(`${baseUrl}/register`,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userInfo)
        })
        .then(navig('/login'))
    }



    return(
        <>
            <Header/>
            <div className="container">
                <hr/>
                <div className="bg-white border border-3 border-dark-subtle">
                    <div className="bg-info">
                        <h3>Regsiter</h3>
                    </div>
                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <label for="fname" className='control-label'>Name</label>
                                <input className='form-control' id="fname"
                                name="name" value={userInfo.name} onChange={DataHandler}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="email" className='control-label'>Email</label>
                                <input className='form-control' id="email"
                                name="email" value={userInfo.email} onChange={DataHandler}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="password" className='control-label'>Password</label>
                                <input className='form-control' id="password"
                                name="password" value={userInfo.password} onChange={DataHandler}/>
                            </div>
                            <div className='col-md-6 form-group'>
                                <label for="phone" className='control-label'>Phone</label>
                                <input className='form-control' id="phone"
                                name="phone" value={userInfo.phone} onChange={DataHandler}/>
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

export default Register;