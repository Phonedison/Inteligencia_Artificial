import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding: 2.4rem;
  background: #ffffff;
  border-top: 0.1rem solid #eaeaea;
  gap: 0.8rem;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  border: 0.1rem solid #e2e8f0;
  padding: 1.6rem;
  border-radius: 1.6rem;
  font-size: 1.33rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #6366f1;
  }
`;

export const Button = styled.button`
  background: #6366f1;
  color: white;
  border: none;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;
