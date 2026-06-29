import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f5f2;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 45rem;
  height: 60rem;
  background: #f5f7fa;
  border-radius: 2.4rem;
  box-shadow: 0 0.8rem 4rem rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1.6rem 2.4rem;
  background: #f5f7fa;
  border-bottom: 0.1rem solid #eaeaea;
`;

export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin-right: 0.8rem;
`;

export const Info = styled.div`
  margin: 0;
  font-size: 1.6rem;
  color: #1a1a1a;
`;

export const ChatStatus = styled.div`
  font-size: 1.33rem;
  color: ${(props) => (props.online ? "#2ecc71" : "#cc2e2e")};
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    background: ${(props) => (props.online ? "#2ecc71" : "#cc2e2e")};
    border-radius: 50%;
    margin-right: 0.4rem;
  }
`;
