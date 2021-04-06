import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

class ChatEngineAPI {
  static chatEnginePeopleURL = "https://api.chatengine.io/projects/people";
  static chatEngineChatURL = "https://api.chatengine.io/chats";

  static async signup(
    username: string,
    password: string,
    first_name: string,
    last_name: string
  ) {
    await axios
      .post(
        this.chatEnginePeopleURL,
        {
          username: username,
          secret: password,
          first_name: first_name,
          last_name: last_name,
        },
        {
          headers: {
            "Private-Key": "0021c30c-5617-4d3c-aabf-f81e2bf89cf4",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  static async login(username: string, password: string) {
    const authObject = {
      "Project-ID": "514e53f8-c534-49bb-b49f-5fd0f6cc321f",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get(this.chatEngineChatURL, { headers: authObject });
      await AsyncStorage.setItem("username", username);
      await AsyncStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  static async logout() {
    try {
      await AsyncStorage.removeItem("username");
      await AsyncStorage.removeItem("password");
      window.location.reload();
    } catch (error) {
      console.log("No user is not logged in");
    }
  }
}

export default ChatEngineAPI;
