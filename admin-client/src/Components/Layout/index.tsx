import React from "react";
import styled from "styled-components";
import { GNB, Props as GNBProps } from "../GNB";
// import {SideMenu} from '../GNB/SideMenu/SideMenu';
import { NAV_HEIGHT } from "../../styles/constants";
// import ModalByMessage from '../Modal/ModalByMessage';
// import {useRecoilValue} from 'recoil';
import { SideBar } from "../SideBar";
// import {messageState} from '../../stores/room';

export const LAYOUT_CONTENT_ID = "layout-content";

interface IProps extends GNBProps, React.HTMLAttributes<HTMLDivElement> {
  gnb?: boolean;
  simple?: boolean;
  customGNB?: React.ReactNode;
  topMenu?: React.ReactNode;
  hideSideMenu?: boolean;
  isFlexContent?: boolean;
  children?: React.ReactNode;
}

export const Layout = ({ hideSideMenu, category, page, children }: IProps) => {
  // const message = useRecoilValue(messageState);
  return (
    <>
      {/* {message && <ModalByMessage />} */}
      <Root>
        <Side> {!hideSideMenu && <SideBar />}</Side>

        <Container>
          <GNB category={category} page={page} />
          <Content>{children}</Content>
        </Container>
      </Root>
    </>
  );
};

Layout.defaultProps = {
  gnb: true,
  isFlexContent: false,
};

const Root = styled.div`
  display: flex;
  overflow-y: auto;
  height: 100vh;
`;

const Side = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 30px;
  overflow-x: auto;
  overflow-y: auto;
`;

const Content = styled.div<{ hideSideMenu?: boolean }>`
  margin-top: 30px;
  padding-bottom: 30px;
  height: ${100 % -NAV_HEIGHT.lg}px; // height: 100%;
`;
