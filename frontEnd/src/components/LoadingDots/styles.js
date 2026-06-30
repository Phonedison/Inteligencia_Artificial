import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  width: fit-content;
  align-self: flex-start;
  margin: 0.1rem 0.1rem 0.2rem 0.1rem;
`;

export const Dot = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #adb5db;
  display: inline-block;
  opacity: 0.3;
`;
