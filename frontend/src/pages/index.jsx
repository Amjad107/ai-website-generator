import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">AI Website Generator</h1>
      <p className="mb-4">Describe your idea and generate a live website instantly.</p>
      <Link to="/builder" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Building</Link>
    </div>
  );
}
