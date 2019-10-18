import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  })

 const handleChange = e => {
   setUserCredentials(
     {
       ...userCredentials,
       [e.target.name]: e.target.value
     }
   )
 }

 const onSubmit = e => {
   e.preventDefault();
   axiosWithAuth()
   .post('/login', userCredentials)
   .then(res => {
     localStorage.setItem('token', res.data.payload)
     props.history.push('/friends')
   })
   .catch(err => console.log(err.response))
 }
  return (
    <>
      <p>Welcome to the Bubble App!</p>
      <p>Build a login page here</p>
      <div>
     <form onSubmit = {onSubmit}>
      
      <input 
      type = 'text' 
      name= 'username' 
      value = {userCredentials.username} 
      onChange = {handleChange} 
      placeholder = 'username'
      />

      <input 
      type = 'password' 
      name = 'password' 
      value = {userCredentials.password} 
      onChange = {handleChange} 
      placeholder = 'password'
      />

      <button>Login</button>

     </form>
   </div>
    </>
  );
};

export default Login;
