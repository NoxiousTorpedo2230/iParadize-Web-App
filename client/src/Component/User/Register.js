import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle, FaFacebook, FaTwitter, FaApple } from 'react-icons/fa';

const validateForm = (data) => {
    const errors = {};
    if (!data.name?.trim()) {
        errors.name = 'Username is required';
    } else if (!/^[a-zA-Z]{2,15}$/.test(data.name)) {
        errors.name = 'Username must be in alphabet';
    } else if (data.name.length < 3) {
        errors.name = 'Username must have 3 characters';
    }

    if (!data.email?.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (!data.password) {
        errors.password = 'Password is required';
    } else if (data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    if (!data.cnfPassword) {
        errors.cnfPassword = 'Confirm password is required';
    } else if (data.cnfPassword !== data.password) {
        errors.cnfPassword = 'Passwords do not match';
    }

    return errors;
};

function Register({ showModal, handleCloseModal, handleShowLoginModal, setCurrentUser, setIsLoggedIn }) {
    const [regInfo, setRegInfo] = useState({
        name: '',
        email: '',
        password: '',
        cnfPassword: ''
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const formUpdate = (e) => {
        const { name, value } = e.target;
        setRegInfo({
            ...regInfo,
            [name]: value
        });
    };
    
    const formUpload = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(regInfo);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setIsLoading(true);
            try {                
                const checkEmail = await axios.get(`http://localhost:4000/api/user/register?email=${regInfo.email}`);                
                if (checkEmail.data.success) {
                    setErrorMessage('Email already registered.');
                } else {                    
                    const response = await axios.post('http://localhost:4000/api/auth/register', {
                        name: regInfo.name,
                        email: regInfo.email,
                        password: regInfo.password,
                        cnfPassword: regInfo.cnfPassword  
                    }, { withCredentials: true });
                    
                    if (response.data.success) {
                        setSuccessMessage('Registration Successful');
                        setErrorMessage('');
                        setRegInfo({ name: '', email: '', password: '', cnfPassword: '' });

                        const userData = {
                            name: regInfo.name,
                            email: regInfo.email
                        };
                        
                        localStorage.setItem('currentUser', JSON.stringify(userData));
                        setCurrentUser(userData);
                        setIsLoggedIn(true);
                        handleCloseModal();
                        navigate('/welcome');
                    } else {
                        setErrorMessage(`Unable to register user - ${response.data.message}`);
                    }
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        try {
                            const response = await axios.post('http://localhost:4000/api/auth/register', {
                                name: regInfo.name,email: regInfo.email,password: regInfo.password,cnfPassword: regInfo.cnfPassword
                            });

                            if (response.data.success) {
                                setSuccessMessage('Registration Successful');
                                setErrorMessage('');
                                setRegInfo({ name: '', email: '', password: '', cnfPassword: '' });

                                const userData = {
                                    name: regInfo.name,email: regInfo.email
                                };
                                
                                localStorage.setItem('currentUser', JSON.stringify(userData));
                                setCurrentUser(userData);
                                setIsLoggedIn(true);
                                handleCloseModal();
                                navigate('/welcome');
                            }
                        } catch (regError) {
                            setErrorMessage(`Error during registration: ${regError.message}`);
                        }
                    } else {
                        setErrorMessage(`Error: ${error.response.data.message || error.message}`);
                    }
                } else {
                    setErrorMessage(`Error: ${error.message}`);
                }
            } finally {
                setIsLoading(false);
            }
        } else {
            setErrorMessage('Please fix the errors');
        }
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body style={{ backgroundColor: 'black', color: 'whitesmoke', fontSize: '0.9rem', borderRadius: '4px', padding: '0', margin: '0', overflow: 'hidden' }}>
                <div className='text-center' style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', marginTop: '1rem', verticalAlign: 'center' }}>
                    <FaApple style={{ fontSize: '30px' }} /> <span style={{ fontWeight: 'bold' }}>iParadize</span>
                </div>
                {successMessage && <div className="text-center text-success mb-3">{successMessage}</div>}
                <form onSubmit={formUpload} style={{ borderRadius: '10px', padding: '1rem', backgroundColor: 'black' }}>
                    {Object.keys(errors).length > 0 && (
                        <div className="text-danger mb-3">
                            {Object.values(errors).map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </div>
                    )}
                    <div>
                        <label htmlFor="name" className='form-label'>Name <sup style={{ color: 'red' }}>*</sup></label>
                        <input className='form-control' type="text" name="name" id="name" placeholder='Enter Your Name' value={regInfo.name} onChange={formUpdate} style={{ fontSize: '0.8rem', borderRadius: '5px' }} aria-describedby="nameError"/>
                        {errors.name && <span id="nameError" className="text-danger">{errors.name}</span>}
                    </div><br />

                    <div>
                        <label htmlFor="email" className='form-label'>Email-Id <sup style={{ color: 'red' }}>*</sup></label>
                        <input className='form-control' type="email" name="email" id="email" placeholder='Enter Your Mail-Id' value={regInfo.email} onChange={formUpdate}     style={{ fontSize: '0.8rem', borderRadius: '5px' }} aria-describedby="emailError"/>
                        {errors.email && <span id="emailError" className="text-danger">{errors.email}</span>}
                    </div><br />

                    <div>
                        <label htmlFor="password" className='form-label'>Password <sup style={{ color: 'red' }}>*</sup></label>
                        <input className='form-control' type="password" name="password" id="password" placeholder='Enter Your Password' value={regInfo.password} onChange={formUpdate}style={{ fontSize: '0.8rem', borderRadius: '5px' }} aria-describedby="passwordError"/>
                        {errors.password && <span id="passwordError" className="text-danger">{errors.password}</span>}
                    </div><br />

                    <div>
                        <label htmlFor="cnfPassword" className='form-label'>Confirm Password <sup style={{ color: 'red' }}>*</sup></label>
                        <input className='form-control' type="password" name="cnfPassword" id="cnfPassword" placeholder='Enter Your Confirm Password' value={regInfo.cnfPassword} onChange={formUpdate} style={{ fontSize: '0.8rem', borderRadius: '5px' }} aria-describedby="cnfPasswordError"/>
                        {errors.cnfPassword && <span id="cnfPasswordError" className="text-danger">{errors.cnfPassword}</span>}
                    </div><br />

                    <div className="text-center">
                        {isLoading ? (
                            <Button variant="success" disabled>
                                Register
                            </Button>
                        ) : (
                            <Button variant="success" type="submit">
                            Register
                        </Button>
                    )}
                </div>
            </form>
                <div className="text-center">
                    {errorMessage && <span className='text-danger'>{errorMessage}</span>}
                </div>
                <div className="text-center" style={{ fontSize: '0.9rem' }}>
                    <p>Or Sign Up with:</p>
                    <Button variant="link" className="me-2" style={{ fontSize: '0.9rem', color: 'whitesmoke' }}>
                        <FaGoogle />
                    </Button>
                    <Button variant="link" className="me-2" style={{ fontSize: '0.9rem', color: 'whitesmoke' }}>
                        <FaFacebook />
                    </Button>
                    <Button variant="link" className="me-2" style={{ fontSize: '0.9rem', color: 'whitesmoke' }}>
                        <FaTwitter />
                    </Button>
                    <p className="mt-3">Already have an account? <Link onClick={handleShowLoginModal} style={{ color: 'whitesmoke' }}>Sign In</Link></p>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default Register;