import { useEffect, useMemo, useState } from "react";
import "./App.css";

const API_BASE = "http://localhost:3000";

function App() {
  const [status, setStatus] = useState("stopped");
  const [logs, setLogs] = useState([]);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  const statusIndicator = useMemo(
    () => (status === "running" ? "Status: Running" : "Status: Stopped"),
    [status]
  );

  async function fetchStatus() {
    const response = await fetch(`${API_BASE}/status`);
    const data = await response.json();
    setStatus(data.status);
  }

  async function fetchLogs() {
    const response = await fetch(`${API_BASE}/logs`);
    const data = await response.json();
    setLogs(data.logs || []);
  }

  async function fetchPrice() {
    const response = await fetch(`${API_BASE}/price`);
    const data = await response.json();
    setPrice(data.price);
  }

  async function startAgent() {
    setError("");
    try {
      const response = await fetch(`${API_BASE}/start`, { method: "POST" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to start");
      setStatus("running");
      fetchLogs();
    } catch (err) {
      setError(err.message);
    }
  }

  async function stopAgent() {
    setError("");
    try {
      const response = await fetch(`${API_BASE}/stop`, { method: "POST" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to stop");
      setStatus("stopped");
      fetchLogs();
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchStatus().catch(() => setError("Could not fetch status"));
    fetchLogs().catch(() => setError("Could not fetch logs"));
    fetchPrice().catch(() => {});

    const intervalId = setInterval(() => {
      fetchLogs().catch(() => {});
      fetchStatus().catch(() => {});
      fetchPrice().catch(() => {});
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="container">
      <header>
        <h1>Sentinel AI</h1>
        <p className="tagline">Emotionless Autonomous Trading</p>
      </header>

      <section className="panel controls">
        <p className={`status ${status}`}>{statusIndicator}</p>
        <p>Current ETH Price: {price ? `$${price}` : "Not available yet"}</p>
        <div className="button-row">
          <button onClick={startAgent}>Start Agent</button>
          <button onClick={stopAgent} className="secondary">
            Stop Agent
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </section>

      <section className="panel">
        <h2>Live Logs</h2>
        <div className="logs">
          {logs.length === 0 ? (
            <p>No logs yet</p>
          ) : (
            logs.map((entry, index) => <p key={`${index}-${entry}`}>{entry}</p>)
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
