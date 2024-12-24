import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [reply, setReply] = useState('');
  const [status, setStatus] = useState('loading'); // 'loading', 'ready', 'error'
  const [countdown, setCountdown] = useState(30); // Initial countdown time in seconds

  const fetchData = async () => {
    try {
      setStatus('loading'); // Show yellow lightbulb
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || "http://localhost:10000"}/ping`);
      const data = await response.json();
      setReply(data.reply);
      setStatus('ready'); // Show green lightbulb
    } catch (error) {
      console.error('Error fetching data:', error);
      setStatus('error'); // Show red lightbulb or handle error state
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts

    const countdownInterval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 0) {
          return prevCountdown - 1;
        } else {
          fetchData(); // Fetch data when countdown reaches 0
          return 30; // Reset countdown to 30 seconds
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className={`lightbulb ${status}`} />
        <p>{reply}</p>
        <div>Next fetch in: {countdown} seconds</div>
      </header>
    </div>
  );
}

export default App;