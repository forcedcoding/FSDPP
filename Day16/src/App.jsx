import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = () => {
    console.log(submittedData);
    if (name && email) {
      setSubmittedData({ name, email });
      setName("");
      setEmail("");
    }
  };

  const handleDelete = () => { 
    setSubmittedData(null);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <div className="main">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleDelete}>Clear</button>
      </div>
      {submittedData && (
        <div className="card">
          <h2>{submittedData.name}</h2>
          <p>{submittedData.email}</p>
        </div>
      )}
    </div>
  );
}
