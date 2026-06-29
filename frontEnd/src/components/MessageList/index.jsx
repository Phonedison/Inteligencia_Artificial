import gsap from "gsap";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { Bubble, Messages, Time } from "./styles";

export const MessageList = ({ messages }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current && listRef.current.children.length > 0) {
      const lastMessage = listRef.current.lastElementChild;

      gsap.fromTo(
        lastMessage,
        { opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)" },
      );

      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Messages ref={listRef}>
      {messages.map((msg) => (
        <Bubble key={msg.id} $isMe={msg.isMe}>
          <ReactMarkdown>{msg.text}</ReactMarkdown>
          <Time>{msg.time}</Time>
        </Bubble>
      ))}
    </Messages>
  );
};

export default MessageList;
