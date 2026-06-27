import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

import MessageInput from "../MessageInput";
import MessageList from "../MessageList";
import { Avatar, ChatStatus, Container, Header, Info, Wrapper } from "./styles";

gsap.registerPlugin(useGSAP);

export const ChatContainer = () => {
  const containerRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Como posso te ajudar hoje?",
      isMe: false,
      time: "00:00",
    },
    {
      id: 2,
      text: "Oi! Gostaria de saber mais sobre as animações com GSAP no React.",
      isMe: true,
      time: "00:00",
    },
    {
      id: 3,
      text: "Com certeza! O GSAP é incrível para criar transições fluidas e micro-interações.",
      isMe: false,
      time: "00:00",
    },
  ]);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
      );
    },
    { scope: containerRef },
  );

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      isMe: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <Wrapper>
      <Container ref={containerRef}>
        <Header>
          <Avatar></Avatar>
          <Info>
            <h3>Chat bulinha</h3>
            <ChatStatus>Online</ChatStatus>
          </Info>
        </Header>
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </Container>
    </Wrapper>
  );
};

export default ChatContainer;
