import React, { useState, useContext } from 'react'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = useContext(ShopContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {
      if (currentState === 'Sign Up') {
        // Create new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Update user profile with name
        await updateProfile(userCredential.user, {
          displayName: name
        });
        console.log('User registered:', userCredential.user);
        alert('Account created successfully!');
        navigate('/');
      } else {
        // Login existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', userCredential.user);
        alert('Login successful!');
        navigate('/');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      alert(error.message);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forgot your password</p>
          {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
          }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
    </form>
  )
}

export default Login
