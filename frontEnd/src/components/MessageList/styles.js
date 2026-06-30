import styled from "styled-components";

export const Messages = styled.div`
  flex: 1;
  padding: 2.4rem;
  overflow-y: auto;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 1.2rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    background-clip: padding-box;
    border-radius: 0.8rem;
    border: 0.3rem solid transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;

export const Bubble = styled.div`
  max-width: 75%;
  padding: 0.8rem 1.6rem;
  font-size: 1.4rem;

  line-height: 1.4;
  position: relative;

  background: ${(props) => (props.$isMe ? "#6366f1" : "#ededed")};
  color: ${(props) => (props.$isMe ? "#ffffff" : "#333333")};
  align-self: ${(props) => (props.$isMe ? "flex-end" : "flex-start")};

  border-radius: ${(props) =>
    props.$isMe ? "1.6rem 1.6rem .3rem 1.6rem" : "1.6rem 1.6rem 1.6rem .3rem"};

  box-shadow: ${(props) =>
    props.$isMe
      ? "0 0.4rem 1.6rem rgba(99, 102, 241, 0.2)"
      : "0 0.2rem 0.8rem rgba(0,0,0,0.02)"};

  & img {
    max-width: 24rem;
    border-radius: 0.8rem;
    margin-top: 0.8rem;
    display: block;
  }

  & ul {
    list-style-position: inside;
    padding: 0.8rem;
    gap: 0.8rem;

    & li {
      padding: 0.4rem;
    }
  }

  & p {
    margin-bottom: 0.4rem;
  }
`;

export const Time = styled.span`
  display: block;
  font-size: 1rem;
  margin-top: 0.8rem;
  text-align: right;
  opacity: 0.6;
`;
