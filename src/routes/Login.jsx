import React, { useState } from 'react';
import { useSignInMutation } from '../redux/api/index'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn, { isLoading, error }] = useSignInMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await signIn({ email, password }).unwrap();
  
      alert('Login successful!');
    } catch (err) {
     
      alert(`Login failed: ${err.message}`);
    }
  };

  return (
   <div className='w-[800px] mt-40 bg-green-200 shadow-lg rounded-xl m-auto border p-4'>
     <div className="w-full">
      <form className="  flex flex-col gap-4 m-auto items-center" onSubmit={handleSubmit}>
        <h2 className="text-center text-[28px] font-bold text-blue-700">LOGIN</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full text-[20px] p-2 border rounded-md outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full text-[20px] border rounded-md p-2 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="border bg-white w-28 p-2 rounded-md text-center" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        {error && <p className="login-error">Error: {error.message}</p>}
      </form>
    </div>
   </div>
  );
};

export default Login;