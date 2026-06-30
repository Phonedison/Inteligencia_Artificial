import gsap from "gsap";
import { useRef, useState } from "react";
import { Button, Form, Input } from "./styles";

export const MessageInput = ({ onSendMessage }) => {
  const [text, setText] = useState("");
  const buttonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSendMessage(text);
    setText("");
  };

  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.05,
      duration: 0.2,
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1.0,
      duration: 0.2,
      overwrite: "auto",
    });
  };

  const handleMouseDown = () => {
    gsap.to(buttonRef.current, {
      scale: 0.9,
      duration: 0.1,
      overwrite: "auto",
    });
  };

  const handleMouseUp = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.1,
      overwrite: "auto",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite sua mensagem..."
      />
      <Button
        ref={buttonRef}
        type="submit"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
        </svg>
      </Button>
    </Form>
  );
};
