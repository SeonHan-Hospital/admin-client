import React, { useState } from "react";
import styled from "styled-components";
import { NAV_HEIGHT } from "../../styles/constants";
import theme from "../../styles/theme";
// import Icon__user from './icon__user.svg';
// import {useLogout, useSession} from '../../hooks/session';
// import Typography from '../Typography/Typography';
import { useNavigate } from "react-router-dom";
// import {HeaderModal} from '../Modal/HeaderModal';
// import {useRecoilState} from 'recoil';
// import {internalAdminState} from '../../stores/room';

export interface Props {
  category?: string;
  page?: string;
}

export const GNB = ({ category, page }: Props) => {
  // const {hasSession, user} = useSession();
  // const logout = useLogout();
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [modifyForm, setModifyForm] = React.useState<boolean>(false);
  // const navigate = useNavigate();
  // const [internalAdmin, setInternalAdmin] = useRecoilState(internalAdminState);

  // const handleConfirm = React.useCallback(() => {
  //   setModifyForm(false);
  // }, []);

  // useEffect(() => {
  //   if (!hasSession) {
  //     navigate('/signin');
  //   }
  // }, [hasSession, navigate]);

  return (
    <Root>
      <Container>
        <div>
          {category} <span>/ {page}</span>
        </div>
        <RightWrapper>
          {/* {hasSession && (
            <>
              {category === '고객상세' && (
                <Info>
                  <InfoList>
                    <InfoDetail>본사 담당자: {internalAdmin?.name || '미배정'}</InfoDetail>
                    <InfoDetail>연락처: 1644-3670 (3번 연결)</InfoDetail>
                    <InfoDetail>이메일: mubo_cs@duse.co.kr</InfoDetail>
                  </InfoList>
                </Info>
              )}

              <UserIcon src={Icon__user} alt="유저아이콘" />
              <div style={{cursor: 'pointer'}} onClick={() => SetIsOpen(!isOpen)}>
                {user && user.name}
              </div>
            </>
          )} */}
        </RightWrapper>
      </Container>
      {isOpen && (
        <UserModal>
          <div onClick={() => setModifyForm(true)}>정보변경</div>
          <Logout>로그아웃</Logout>
        </UserModal>
      )}
      {/* {modifyForm && <HeaderModal content={user} onClose={handleConfirm} />} */}
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

// const BreadCrumb = styled(Typography)`
//   span {
//     color: ${theme.palette.border};
//     font-size: 16px;
//     line-height: 20px;
//   }
// `;

// const UserIcon = styled.img`
//   margin-right: 8px;
// `;

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
  margin-top: 6px;
  color: ${({ theme }) => theme.palette.bl01};
`;

// const Info = styled.ul`
//   margin-right: 40px;
//   font-size: 14px;
// `;

// const InfoList = styled.li``;

// const InfoDetail = styled.strong`
//   margin-left: 16px;
// `;
