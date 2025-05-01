import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else window.location.href = "/builder";
  };

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Signup successful! Please login.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h2 className="text-2xl font-semibold mb-4">Login / Signup</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 mb-2 w-64" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border p-2 mb-4 w-64" />
      <div className="flex gap-2">
        <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        <button onClick={handleSignup} className="bg-gray-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </div>
  );
}
