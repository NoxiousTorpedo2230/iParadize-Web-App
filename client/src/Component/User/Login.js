import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaFacebook, FaTwitter, FaApple } from 'react-icons/fa';

function Login({ showModal, handleCloseModal, setIsLoggedIn, setCurrentUser, handleShowRegisterModal }) {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!loginInfo.email || !loginInfo.password) {
            setErrorMessage('Email and password are required');
            return;
        }
        
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/api/auth/login', {
                email: loginInfo.email,
                password: loginInfo.password
            }, { withCredentials: true });
            
            if (response.data.success) {
                const user = response.data.user;
                localStorage.setItem('currentUser', JSON.stringify(user));
                setCurrentUser(user); // Includes name
                setIsLoggedIn(true);
                handleCloseModal();
                navigate('/welcome');
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message || 'Login failed');
            } else {
                setErrorMessage('Network error. Please try again.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body style={{ backgroundColor: 'black', color: 'whitesmoke', fontSize: '0.9rem', borderRadius: '4px', padding: '15px', margin: '0', overflow: 'hidden' }}>
                <div className='text-center' style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', marginTop: '1rem', verticalAlign: 'center' }}>
                    <FaApple style={{ fontSize: '30px' }}/><span style={{ fontWeight: 'bold' }}>iParadize</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='form-label'>Email-Id</label>
                        <input className='form-control' type="email" name="email" id="email" placeholder='Enter Your Mail-Id' value={loginInfo.email} onChange={handleChange} />
                        {errorMessage.includes("email") && <span style={{ color: 'red' }}>{errorMessage}</span>}
                    </div><br />

                    <div>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input className='form-control' type="password" name="password" id="password" placeholder='Enter Your Password' value={loginInfo.password} onChange={handleChange} />
                        {errorMessage.includes("password") && <span style={{ color: 'red' }}>{errorMessage}</span>}
                    </div><br />

                    <div className="text-center">
                        <button type="submit" className='btn btn-success'>
                            {isLoading ? 'Login' : 'Login'}
                        </button>
                    </div>
                </form><br />
                <div className="text-center">
                    {errorMessage && !errorMessage.includes("email") && !errorMessage.includes("password") && <span className='text-danger'>{errorMessage}</span>}
                </div>
                <div className="text-center">
                    <p>Or Sign In with:</p>
                    <Button variant="link" className="me-2" style={{ fontSize: '0.9rem', color: 'whitesmoke' }}><FaGoogle /></Button>
                    <Button variant="link" className="me-2" style={{ fontSize: '0.9rem', color: 'whitesmoke' }}><FaFacebook /></Button>
                    <Button variant="link" className="me-2" style={{ fontSize: '0.9rem', color: 'whitesmoke' }}><FaTwitter /></Button>
                    <p className="mt-3">Don't have an account? <Link onClick={handleShowRegisterModal} style={{ color: 'whitesmoke' }}>Sign Up</Link></p>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default Login;