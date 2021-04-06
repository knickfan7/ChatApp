import { useState } from "react";
import ChatEngineAPI from "../api/ChatEngine";

function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      ChatEngineAPI.login(username, password);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">My Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
