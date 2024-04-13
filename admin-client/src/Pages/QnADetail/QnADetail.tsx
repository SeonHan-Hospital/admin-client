import styled from "styled-components";
import { Layout } from "../../Components/Layout";
import theme from "../../styles/theme";
import { QuestionInfo } from "./QuestionInfo";
import { useCallback, useEffect, useMemo, useState } from "react";
import { dummyAnswers } from "../QnA/data";
import { IQuestion } from "../QnA";
import { AnswerTable } from "./AnswerTable";
import { useLocation } from "react-router-dom";
import { useDetailQuestion, useModifyQuestion } from "../../hooks/api";

const INITIAL_VALUE: IQuestion = {
  id: -1,
  author: "",
  subject: "",
  content: "",
  QnA_number: -1,
  answerId: [],
  createdAt: "",
  updatedAt: "",
};

export const QnADetail = () => {
  const location = useLocation();
  const [req, res] = useDetailQuestion();
  const [questionDetail, setQuestionDetail] =
    useState<IQuestion>(INITIAL_VALUE);
  const [values, setValues] = useState<IQuestion>(INITIAL_VALUE);
  const isActive = useMemo(
    () =>
      questionDetail.content !== values.content ||
      questionDetail.subject !== values.subject,
    [questionDetail, values]
  );
  const [questionModifyReq, questionModifyRes] = useModifyQuestion();

  useEffect(() => {
    if (location.state) {
      req(location.state.id);
    }
  }, [location, req]);

  useEffect(() => {
    if (res.called && res.data) {
      setQuestionDetail(res.data);
      setValues(res.data);
    }
  }, [res]);

  const handleQuestionModify = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (location.state && isActive && confirm("수정하시겠습니까?")) {
      questionModifyReq({
        id: location.state.id,
        subject: values.subject,
        author: values.author,
        content: values.content,
      });
    }
  }, [questionModifyReq, values, location, isActive]);

  useEffect(() => {
    if (questionModifyRes.called && questionModifyRes.data) {
      alert("수정이 완료되었습니다.");
      window.location.reload();
    }
  }, [questionModifyRes]);

  return (
    <Layout category="QnA" page="QnA관리">
      <Wrapper>
        <QuestionInfoContainer>
          <FieldTitle>Question</FieldTitle>
          <QuestionInfo setQuestionDetail={setValues} questionDetail={values} />
          <ButtonContainer>
            <LoginButton isActive={isActive} onClick={handleQuestionModify}>
              수정
            </LoginButton>
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
