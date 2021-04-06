import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

function ChatFeed(props) {
  const { chats, activeChat, userName, messages } = props;

  // find current active chat
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, myMessage: boolean) => {
    return chat.people.map(
      (person, index: number) =>
        person.last_read === message.id && (
          <div
            key={index}
            className="read-receipt"
            style={{
              float: myMessage ? "right" : "left",
              backgroundImage: `url(${person?.person?.avatar})`,
            }}
          />
        )
    );
  };

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessage = index === 0 ? null : keys[index - 1];
      const myMessage: boolean = userName === message.sender.username;

      return (
        <div key={key} style={{ width: "100%" }}>
          
          <div className="message-block">
            {myMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessage]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: myMessage ? "18px" : "0px",
              marginLeft: myMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, myMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) {
    return <>Loading... </>;
  }

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((user) => ` ${user.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
}

export default ChatFeed;
