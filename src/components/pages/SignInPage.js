import React ,{useState}from 'react';
import {useDispatch, useSelector} from "react-redux"

import Layout from '../layout/Layout';
import { fetchUser } from '../../fetchData';
import { userLogIn } from '../../reduxStore';




const Form = () =>{

  const [{email,password}, setCredentials] = useState({email:"",password: ""});
  const dispatch = useDispatch()

  const onSubmit = () =>{

    fetchUser(email,password)
    .then((user)=>dispatch(userLogIn(user)))
    .catch((error)=>{
      console.log("error", error);
    });
    
  };

  return(
    <div>
    <input 
        type="email" 
        label="Email"
        value={email}
        onChange={(event)=>{
          setCredentials({password, email: event.target.value})
        }}
    ></input>
    <input 
        type="text" 
        label="Password"
        value={password}
        onChange={(event)=>{
          setCredentials({email, password: event.target.value})
        }}
    ></input>
    <button onClick={onSubmit}>Log in</button>
  </div>
  )
}



const SignInPage = () => {

const user = useSelector((state)=>state.user);

 return(
     <Layout>
      <h3>{user ? `Welcome Back ${user.name}` : <Form/>}</h3>
    </Layout>
 )
};

export default SignInPage;
