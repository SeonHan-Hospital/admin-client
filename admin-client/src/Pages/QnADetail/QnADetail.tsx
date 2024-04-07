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
          <FieldTitle>Question</FieldTitle>
          <QuestionInfo
            setQuestionDetail={setQuestionDetail}
            questionDetail={questionDetail}
          />
          <ButtonContainer>
            <LoginButton isActive={isActive}>수정</LoginButton>
          </ButtonContainer>
        </QuestionInfoContainer>
        <AnswerInfoContainer>
          <FieldTitle style={{ width: "100%" }}>Answers</FieldTitle>
          <AnswerTable memos={dummyAnswers} handleOnClick={() => {}} />
          <BorderLine />
          <FieldTitle style={{ width: "100%" }}>Answer Detail</FieldTitle>
          <AnswerText />
          <AnswerButtonContainer>
            <AnswerButton style={{ marginRight: "20px" }} isActive={false}>
              수정
            </AnswerButton>
            <AnswerButton isActive={false}>등록</AnswerButton>
          </AnswerButtonContainer>
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
  flex-direction: column;
  margin: 0 50px;
  align-items: center;
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
  width: 100px;
  height: 48px;
  color: ${theme.palette.white};
  font-weight: bold;
  background-color: ${({ isActive }) =>
    isActive ? theme.palette.primary : theme.palette.blackLighter};
`;

const AnswerButton = styled.div<{ isActive: boolean }>`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: ${({ isActive }) => (isActive ? "pointer" : "")};
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  border-radius: 5px;
  width: 100px;
  height: 48px;
  font-weight: bold;
  background-color: ${({ isActive }) =>
    isActive ? theme.palette.primary : theme.palette.blackLighter};
`;

const FieldTitle = styled.div`
  width: 80%;
  font-size: 20px;
  margin: 15px 0;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.palette.border};
  margin: 30px 0 15px 0;
`;

const AnswerText = styled.textarea`
  resize: none;
  width: 100%;
  height: 30%;
`;

const AnswerButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: end;
  flex: 1;
  align-items: end;
`;
