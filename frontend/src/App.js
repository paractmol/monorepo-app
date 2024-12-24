import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [reply, setReply] = useState('');
  const [status, setStatus] = useState('loading'); // 'loading', 'ready', 'error'

  const fetchData = async () => {
    try {
      setStatus('loading'); // Show yellow lightbulb
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ping`);
      const data = await response.json();
      setReply(data.reply);
      setStatus('ready'); // Show green lightbulb
    } catch (error) {
      console.error('Error fetching data:', error);
      setStatus('error'); // Show red lightbulb or handle error state
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();

      // Wait for 10 seconds before the next request
      const timeout = setTimeout(() => {
        fetchData();
      }, 10000);

      return () => clearTimeout(timeout);
    }, 30000);

    // Initial fetch on component mount
    fetchData();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className={`lightbulb ${status}`} />
        <b>{reply}</b>
      </header>
    </div>
  );
}

export default App;