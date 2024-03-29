import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { NAV_HEIGHT } from "../../styles/constants";
import theme from "../../styles/theme";
import Icon__user from "./icon__user.svg";
import { useNavigate } from "react-router-dom";

export interface Props {
  category?: string;
  page?: string;
}

export const GNB = ({ category, page }: Props) => {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <Root>
      <Container>
        <BreadCrumb>
          {category} <span>/ {page}</span>
        </BreadCrumb>
        <RightWrapper>
          {
            <>
              <UserIcon src={Icon__user} alt="유저아이콘" />
              <UserBtn onClick={() => SetIsOpen(!isOpen)}>관리자</UserBtn>
            </>
          }
        </RightWrapper>
      </Container>
      {isOpen && (
        <UserModal>
          <Logout onClick={handleLogout}>로그아웃</Logout>
        </UserModal>
      )}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: ${NAV_HEIGHT.lg}px;
  z-index: ${theme.zIndex.nav};
  background-color: ${theme.palette.white};
  border-bottom: 1px solid ${theme.palette.borderGray};
`;

const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-grow: 1;
  height: 100%;
  align-items: center;
`;

const BreadCrumb = styled.div`
  span {
    color: ${theme.palette.border};
    font-size: 16px;
    line-height: 20px;
  }
`;

const UserIcon = styled.img`
  margin-right: 8px;
`;

const UserBtn = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
`;

const UserModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  width: 140px;
  padding: 10px 0px;
  background-color: white;
  box-shadow: ${theme.palette.shadow01};
  border-top: 2px solid ${theme.palette.primary};
  div {
    cursor: pointer;
  }
`;

const RightWrapper = styled.div`
  justify-content: flex-end;
  display: flex;
  font-size: 16px;
  line-height: 20px;
`;

const Logout = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 6px;
  color: ${theme.palette.black};
`;
