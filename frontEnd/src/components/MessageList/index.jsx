import gsap from "gsap";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { LoadingDots } from "../LoadingDots";
import { Bubble, Messages, Time } from "./styles";

export const MessageList = ({ messages, loading }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const messageBubbles = listRef.current.querySelectorAll(
        '[data-message="true"]',
      );

      if (messageBubbles.length > 0) {
        const lastRealMessage = messageBubbles[messageBubbles.length - 1];

        gsap.fromTo(
          lastRealMessage,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.2)" },
        );
      }

      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  useEffect(() => {
    if (loading && listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [loading]);

  return (
    <Messages ref={listRef}>
      {messages.map((msg) => (
        <Bubble key={msg.id} $isMe={msg.isMe} data-message="true">
          <ReactMarkdown>{msg.text}</ReactMarkdown>
          <Time>{msg.time}</Time>
        </Bubble>
      ))}

      {loading && (
        <Bubble $isMe={false}>
          <LoadingDots />
        </Bubble>
      )}
    </Messages>
  );
};
