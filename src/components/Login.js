import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {auth,fs} from '../Config/Config'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorMsg, setErrorMsg] =useState('')
  const [successMsg, setSuccessMsg] =useState('')


  const handleLogin=(e)=>{
    e.preventDefault();
    // console.log(email,password);
    auth.signInWithEmailAndPassword(email,password).then(()=>{
      setSuccessMsg('Login successful, you will now automatically redireact to Home Page')
      setFullName('');
        setEmail('');
        setPassword('');
        setErrorMsg('');
        setTimeout(()=>{
          setSuccessMsg('');
          navigate('/');
        },3000)
    }).catch(error=>setErrorMsg(error.message));
  }

  return (
    <div className='container'>
    <br></br>
    <br></br>
    <h1>Login</h1>
    <hr></hr>
    {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
    <form className='form-group' autoComplete="off" onSubmit={handleLogin} >
        
        <label>Email</label>
        <input type="email" className='form-control' autoComplete='off' required
         onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br></br>
        <label>Password</label>
        <input type="password" className='form-control' required
        onChange={(e)=>setPassword(e.target.value)} value={password} ></input>
        <br></br>
        <div className='btn-box'>
            <span>Dont have an account Signup
            <Link to="/signup" className='link'> Here</Link></span>
            <button type="submit" className='btn btn-success btn-md'>Login</button>
        </div>
    </form>
    <br></br>
    {errorMsg&&<>
                <div className='error-msg'>{errorMsg}</div>
                
            </>}
          
</div>
  )
}
