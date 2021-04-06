import { MessageProps } from "./Interfaces";

function TheirMessage(props: MessageProps) {
  const messageOrder: boolean =
    !props.lastMessage ||
    props.lastMessage.sender.username !== props.message.sender.username;

  return (
    <div className="message-row">
      {messageOrder && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${props.message?.sender?.avatar})` }}
        />
      )}
      {props.message?.attachments?.length > 0 ? (
        <img
          src={props.message.attachments[0].file}
          alt="message attachment"
          className="message-image"
          style={{ marginLeft: messageOrder ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: messageOrder ? "4px" : "48px",
          }}
        >
          {props.message.text}
        </div>
      )}
    </div>
  );
}
export default TheirMessage;
