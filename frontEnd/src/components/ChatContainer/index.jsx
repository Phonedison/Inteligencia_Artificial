import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { EnviarPergunta } from "../../utils/Api";
import { MessageInput } from "../MessageInput";
import { MessageList } from "../MessageList";
import { Avatar, ChatStatus, Container, Header, Info, Wrapper } from "./styles";

gsap.registerPlugin(useGSAP);

export const ChatContainer = () => {
  const containerRef = useRef(null);
  const [isResponde, setIsResponde] = useState(false);
  const [status, setStatus] = useState(false);
  const [info, setInfo] = useState("offline");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Como posso te ajudar hoje?",
      isMe: false,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const TimeNow = () =>
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

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

  useEffect(() => {
    const verificarConexao = async () => {
      try {
        await EnviarPergunta("", "teste-conexao");
        setStatus(true);
        setInfo("online");
      } catch (error) {
        setStatus(false);
        setInfo("offline");
      }
    };
    verificarConexao();
  }, []);

  const handleSendMessage = async (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      isMe: true,
      time: TimeNow(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsResponde(true);
    setInfo("gerando resposta...");

    try {
      const resultado = await EnviarPergunta(text, "sessao-react-chat");

      const botMessage = {
        id: Date.now(),
        text: resultado.resposta,
        isMe: false,
        time: TimeNow(),
      };

      setMessages((e) => [...e, botMessage]);
      setStatus(true);
      setInfo("online");
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "Ops, ocorreu um erro ao tentar obter a resposta.",
        isMe: false,
        time: TimeNow(),
      };
      setMessages((e) => [...e, errorMessage]);
      setStatus(false);
      setInfo("offline");
    } finally {
      setIsResponde(false);
    }
  };

  return (
    <Wrapper>
      <Container ref={containerRef}>
        <Header>
          <Avatar></Avatar>
          <Info>
            <h3>ChatBot</h3>
            <ChatStatus online={status}>{info}</ChatStatus>
          </Info>
        </Header>
        <MessageList messages={messages} loading={isResponde} />
        <MessageInput onSendMessage={handleSendMessage} />
      </Container>
    </Wrapper>
  );
};
