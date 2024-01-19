import React, { useState, useContext } from 'react';
import "./Login.scss";
import { Link, useNavigate } from 'react-router-dom';
import { Validation } from './LoginValidation';
import { ThemeContext } from '../../App';
import { AppTheme } from '../../AppTheme';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState<{email: string, password: string}>({
    email: '',
    password: ''
  });
  
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{email: string, password: string }>({
    email: '',
    password: ''
  });
  
  const handleInput = (event: { target: { name: string; value: string; }; }) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
  }

  const handleSubmit = (event: { preventDefault: () => void; } )  => {

    // let errors = {
    //     email: "",
    //     password: "",
    // }
    event.preventDefault();
    setErrors(Validation(errors));
    if(errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/api/users/login', values)
      .then(res => {
        if(res.data === "Success") {
          navigate('/home');
        } else {
          alert("No record exists!");
        }
        console.log(res);
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
    <div className="loginForm" onSubmit={handleSubmit}>
      <div className="detail">
        <h4>Email</h4>
        <input placeholder="Enter Email" name="email" onChange={handleInput} />
        {/* <div>{errors.email && <span className="text-red">{errors.email}</span>}</div> */}
      </div>
      <div className="detail">
        <h4>Password</h4>
        <input placeholder="Enter Password" name="password" onChange={handleInput}/>
        {/* <div>{errors.password && <span className="text-red">{errors.password}</span>}</div> */}
      </div>
      <button type="submit" onClick={handleSubmit} className="sign-in">Login</button>
      <p>You agree to our terms and conditions</p>
      <Link to="/signup" className="register">
        Create Account
      </Link>
    </div>
    </div>
  )
}

export default Login;