import React, { useState } from 'react';
import { generateWebsiteCode } from '../services/ai';

export default function BuilderPage() {
  const [prompt, setPrompt] = useState('');
  const [code, setCode] = useState('');

  const handleGenerate = async () => {
    const generatedCode = await generateWebsiteCode(prompt);
    setCode(generatedCode);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Website Builder</h1>
      <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Describe your website..." className="w-full h-24 p-2 border mb-4" />
      <button onClick={handleGenerate} className="bg-blue-600 text-white px-4 py-2 rounded">Generate</button>
      <pre className="bg-gray-900 text-white p-4 mt-4 overflow-auto max-h-96">{code}</pre>
    </div>
  );
}
