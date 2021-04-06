import { MessageProps } from "./Interfaces";

function MyMessage(props: MessageProps) {
  if (props.message?.attachments?.length > 0) {
    return (
      <img
        src={props.message.attachments[0].file}
        alt="message attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {props.message.text}
    </div>
  );
}
export default MyMessage;
