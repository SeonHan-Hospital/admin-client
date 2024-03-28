import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { sideMenu } from "./data";
import { NAV_HEIGHT } from "../../styles/constants";
import theme from "../../styles/theme";
import logo from "./logo.png";

export const SideBar = () => {
  const location = useLocation();
  const [currMenu, setCurrMenu] = useState<string>(location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrMenu("/QnA");
    }
  }, [location]);

  return (
    <Root>
      <Menu>
        <img src={logo} alt="로고" width={"95%"} />
        {sideMenu.map((i) => {
          return (
            <Item key={i.id} to={i.path} color={currMenu === i.path}>
              <ItemText>{i.label}</ItemText>
            </Item>
          );
        })}
      </Menu>
    </Root>
  );
};

const Root = styled.div`
  width: 100px;
  height: 100%;
  overflow: auto;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: ${theme.palette.primary};

  img {
    margin: 55px 0px 74px 0px;
  }
`;

const Item = styled(NavLink)<{ color: boolean }>`
  all: unset;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  width: 100%;
  height: ${NAV_HEIGHT.sm}px;
  background-color: ${({ color }) => (color ? "#419266" : "none")};
`;

const ItemText = styled.span`
  color: ${theme.palette.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
`;
