import styled from "styled-components";

export const Messages = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Bubble = styled.div`
  max-width: 75%;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1.4;
  position: relative;

  background: ${(props) => (props.$isMe ? "#6366f1" : "#ffffff")};
  color: ${(props) => (props.$isMe ? "#ffffff" : "#333333")};
  align-self: ${(props) => (props.$isMe ? "flex-end" : "flex-start")};

  border-radius: ${(props) =>
    props.$isMe ? "18px 18px 4px 18px" : "18px 18px 18px 4px"};

  box-shadow: ${(props) =>
    props.$isMe
      ? "0 4px 12px rgba(99, 102, 241, 0.2)"
      : "0 2px 4px rgba(0,0,0,0.02)"};
`;

export const Time = styled.span`
  display: block;
  font-size: 10px;
  margin-top: 4px;
  text-align: right;
  opacity: 0.6;
`;
