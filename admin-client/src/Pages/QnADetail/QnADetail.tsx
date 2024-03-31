import styled from "styled-components";
import { Layout } from "../../Components/Layout";
import theme from "../../styles/theme";
import { QuestionInfo } from "./QuestionInfo";
import { useMemo, useState } from "react";
import { dummyAnswers, dummyQuestions } from "../QnA/data";
import { IQuestion } from "../QnA";
import { AnswerTable } from "./AnswerTable";

export const QnADetail = () => {
  const [questionDetail, setQuestionDetail] = useState<IQuestion>(
    dummyQuestions[0]
  );
  const isActive = useMemo(
    () =>
      questionDetail.content !== dummyQuestions[0].content ||
      questionDetail.subject !== dummyQuestions[0].subject,
    [questionDetail]
  );

  return (
    <Layout category="QnA" page="QnA관리">
      <Wrapper>
        <QuestionInfoContainer>
          <QuestionInfo
            setQuestionDetail={setQuestionDetail}
            questionDetail={questionDetail}
          />
          <ButtonContainer>
            <LoginButton isActive={isActive}>수정</LoginButton>
          </ButtonContainer>
        </QuestionInfoContainer>
        <AnswerInfoContainer>
          <AnswerTable memos={dummyAnswers} handleOnClick={() => {}} />
        </AnswerInfoContainer>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

const QuestionInfoContainer = styled.div`
  width: 30%;
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid ${theme.palette.border};
`;

const AnswerInfoContainer = styled.div`
  flex: 1;
  display: flex;
  margin: 0 50px;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: flex-end;
  align-items: end;
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
  border-radius: 5px;
  width: 30%;
  height: 48px;
  color: ${theme.palette.white};
  font-weight: bold;
  background-color: ${({ isActive }) =>
    isActive ? theme.palette.primary : theme.palette.blackLighter};
`;
