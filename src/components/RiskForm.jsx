
import React, { useState } from 'react';
import axios from 'axios';

export default function RiskForm() {
  const [domain, setDomain] = useState('');
  const [token, setToken] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/risk-score`, {
        params: { domain, tokenAddress: token }
      });
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full p-2 border" value={domain} onChange={e => setDomain(e.target.value)} placeholder="Domain (e.g., pump.fun)" />
      <input className="w-full p-2 border" value={token} onChange={e => setToken(e.target.value)} placeholder="Solana Token Address" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Analyze</button>
      {result && (
        <div className="mt-4 p-4 border rounded bg-white">
          <p><strong>Risk Level:</strong> {result.riskScore.level}</p>
          <p><strong>Score:</strong> {result.riskScore.score}</p>
        </div>
      )}
    </form>
  );
}
