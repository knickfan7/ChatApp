import { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/chat/ChatFeed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "./App.css";
import LoginForm from "./components/auth/LoginForm";
import ChatEngineAPI from './components/api/ChatEngine';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      if ((await AsyncStorage.getItem("username")) !== null) {
        setStatus(true);
        setUsername(await AsyncStorage.getItem("username"));
        setPassword(await AsyncStorage.getItem("password"));
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (status === false) {
    return <LoginForm />;
  }

  if (username === "" && password === "") {
    return <></>;
  }

  return (
    <div className="App">
      <div style={{ height: "64px"}} className="navbar-container">
        <h1 className="navbar-title">My Chat App</h1>
        <button className="logout-button" onClick={() => ChatEngineAPI.logout()}>
          Logout
        </button>
      </div>
      <ChatEngine
        height="100vh"
        userName={username}
        userSecret={"password"}
        projectID="514e53f8-c534-49bb-b49f-5fd0f6cc321f"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
