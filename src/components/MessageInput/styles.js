import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding: 16px;
  background: #ffffff;
  border-top: 1px solid #eaeaea;
  gap: 12px;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  border: 1px solid #e2e8f0;
  padding: 12px 16px;
  border-radius: 14px;
  font-size: 14px;
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
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;
