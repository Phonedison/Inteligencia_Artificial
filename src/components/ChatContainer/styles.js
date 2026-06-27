import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  height: 600px;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  background: #ffffff;
  border-bottom: 1px solid #eaeaea;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin-right: 12px;
`;

export const Info = styled.div`
  margin: 0;
  font-size: 16px;
  color: #1a1a1a;
`;

export const ChatStatus = styled.div`
  font-size: 12px;
  color: #2ecc71;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #2ecc71;
    border-radius: 50%;
    margin-right: 4px;
  }
`;
