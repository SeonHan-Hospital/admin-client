import styled from "styled-components";
import { TextField } from "../../Components/TextField";
import theme from "../../styles/theme";
import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const isActive = useMemo(
    () => userId.length > 0 && password.length > 0,
    [userId, password]
  );

  // login function
  const handleLogin = useCallback(() => {
    if (userId === "tjsgks1" && password === "tjsgks1") {
      navigate("/");
    }
  }, [userId, password, navigate]);
  // login function

  return (
    <Wrapper>
      <Logo>선한병원 관리자</Logo>
      <LoginContainer>
        <TextField title="아이디" value={userId} onChange={setUserId} />
        <TextField
          title="비밀번호"
          type="password"
          value={password}
          onChange={setPassword}
        />
        <LoginButton isActive={isActive} onClick={handleLogin}>
          로그인
        </LoginButton>
      </LoginContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  width: 280px;
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.palette.primary};
  border-radius: 20px;
`;

const Logo = styled.div`
  font-size: 36px;
  color: ${theme.palette.primary};
  font-weight: bold;
  padding: 20px 0;
`;

const LoginButton = styled.div<{ isActive: boolean }>`
  // 드레그 방지 코드
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  // 드레그 방지 코드

  cursor: ${({ isActive }) => (isActive ? "pointer" : "")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 220px;
  height: 48px;
  color: ${theme.palette.white};
  font-weight: bold;
  font-size: 30px;
  background-color: ${({ isActive }) =>
    isActive ? theme.palette.primary : theme.palette.blackLighter};
`;
