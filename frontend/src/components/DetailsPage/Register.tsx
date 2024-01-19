import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.scss";
import Validation from './RegisterValidation';
import { ThemeContext } from '../../App';
import { AppTheme } from '../../AppTheme';
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{name: string, email: string, password: string }>({
    name: '',
    email: '',
    password: ''
  });
    
  const handleInput = (event: { target: { name: string; value: string; }; }) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
  }
  
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setErrors(Validation(errors));
    if(errors.name === "" && errors.email === "" && errors.password === "") {
        axios.post('http://localhost:8081/api/users/signup', values)
        .then(res => {
           navigate('/login');
        })
        .catch(err => console.log(err));
    }
  }

  const { theme } = useContext(ThemeContext);

    const heroStyle: AppTheme = {
      dark: {
          backgroundColor: '#333',
          color: 'black',
      },
      light: {
          backgroundColor: '#eee',
          color: 'black',
      },
      common: {
          transition: 'all 1s ease',
      }
    };
  
    const themeStyle = {
      ...heroStyle.common,
      ...(theme === 'light' ? heroStyle.light : heroStyle.dark)
    }

  return (
    <div className="container" style={themeStyle}>
    <Link to="/" className="logo">
      We++
    </Link>
    <div className="registerForm" onSubmit={handleSubmit}>
      <div className="header">Sign-Up</div>
      <div className="detail">
        <h4>Name</h4>
        <input placeholder="Enter Name" name="name" onChange={handleInput} />
        <div>{errors.name && <span className="red-text">{errors.name}</span>}</div>
      </div>
      <div className="detail">
        <h4>Email</h4>
        <input placeholder="Enter Email" name="email" onChange={handleInput} />
        <div>{errors.email && <span className="red-text">{errors.email}</span>}</div>
      </div>
      <div className="detail">
        <h4>Password</h4>
        <input placeholder="Enter Password" name="password" onChange={handleInput}/>
        <div>{errors.password && <span className="red-text">{errors.password}</span>}</div>
      </div>
      <button type="submit" onClick={handleSubmit} className="signup">Sign up</button>
      <p>You agree to our terms and conditions</p>
      <Link to="/login" className="login">
        Login
      </Link>
    </div>
    </div>
  )
}

export default Register
