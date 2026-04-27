import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { generateResponse } from "../system/aiSystem";

export default function AI() {
  const { user } = useAuth();
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [emergency, setEmergency] = useState(false);

  const handleSend = () => {
    const res = generateResponse(input, emergency);
    setResponse(res.message);
  };

  return (
    <div className="page">
      <h1>AI Assistant</h1>

      <div className="chat-header">
        <img
          src={user?.photoURL || "/default.png"}
          className="pfp"
        />
        <button onClick={() => setEmergency(!emergency)}>
          Emergency Mode: {emergency ? "ON" : "OFF"}
        </button>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={handleSend}>Send</button>

      <div className="response">{response}</div>
    </div>
  );
}
