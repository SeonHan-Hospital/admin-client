import styled from "styled-components";
import { Layout } from "../../Components/Layout";
import theme from "../../styles/theme";
import { QuestionInfo } from "./QuestionInfo";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IAnswer, IQuestion } from "../QnA";
import { AnswerTable } from "./AnswerTable";
import { useLocation } from "react-router-dom";
import {
  useDeleteAnswer,
  useDetailQuestion,
  useGetAnswerList,
  useModifyAnswer,
  useModifyQuestion,
  usePostAnswer,
} from "../../hooks/api";

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
  const sessionId = window.sessionStorage.getItem("question_id");
  const id = location.state
    ? location.state.id
    : sessionId
    ? JSON.parse(sessionId)
    : null;
  const [questionDetail, setQuestionDetail] =
    useState<IQuestion>(INITIAL_VALUE);
  const [values, setValues] = useState<IQuestion>(INITIAL_VALUE);
  const [ansDetailValue, setAnsDetailValue] = useState("");
  const [targetAns, setTargetAns] = useState<IAnswer>();
  const [memoList, setMemoList] = useState<IAnswer[]>([]);

  const [req, res] = useDetailQuestion();
  const [answerReq, answerRes] = useGetAnswerList();
  const [questionModifyReq, questionModifyRes] = useModifyQuestion();
  const [deleteAnsReq, deleteAnsRes] = useDeleteAnswer();
  const [modifyAnsReq, modifyAnsRes] = useModifyAnswer();
  const [postAnsReq, postAnsRes] = usePostAnswer();

  const isActive = useMemo(
    () =>
      questionDetail.content !== values.content ||
      questionDetail.subject !== values.subject,
    [questionDetail, values]
  );
  const postAnswerActive = useMemo(
    () => ansDetailValue.length > 0,
    [ansDetailValue]
  );
  const modifyAnsActive = useMemo(
    () =>
      !!targetAns &&
      ansDetailValue !== targetAns?.content &&
      ansDetailValue.length > 0,
    [ansDetailValue, targetAns]
  );

  useEffect(() => {
    if (id) {
      req(id);
      answerReq(id);
      window.sessionStorage.setItem("question_id", JSON.stringify(id));
    }
  }, [location, req, answerReq, id]);

  useEffect(() => {
    if (answerRes.called && answerRes.data) {
      setMemoList(answerRes.data.data);
    }
    if (answerRes.error) {
      alert(answerRes.error);
    }
  }, [answerRes]);

  useEffect(() => {
    if (res.called && res.data) {
      setQuestionDetail(res.data);
      setValues(res.data);
    }
    if (res.error) {
      alert(res.error);
    }
  }, [res]);

  const handlePostAns = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (postAnswerActive && confirm("답변을 등록하시겠습니까?")) {
      postAnsReq({
        questionId: id,
        author: "master",
        content: ansDetailValue,
      });
    }
  }, [postAnsReq, postAnswerActive, ansDetailValue, id]);

  useEffect(() => {
    if (postAnsRes.called && postAnsRes.data) {
      alert("답변이 등록되었습니다.");
      window.location.reload();
    }
    if (postAnsRes.error) {
      alert(postAnsRes.error);
    }
  }, [postAnsRes]);

  const handleModifyAns = useCallback(
    (memo: IAnswer) => {
      // eslint-disable-next-line no-restricted-globals
      if (modifyAnsActive && confirm("답변을 수정하시겠습니까?"))
        modifyAnsReq({ ...memo, content: ansDetailValue });
    },
    [modifyAnsReq, modifyAnsActive, ansDetailValue]
  );

  useEffect(() => {
    if (modifyAnsRes.called && modifyAnsRes.data) {
      alert("수정이 완료되었습니다.");
      window.location.reload();
    }
    if (modifyAnsRes.error) {
      alert(modifyAnsRes.error);
    }
  }, [modifyAnsRes]);

  const handleDeleteAns = useCallback(
    (id: number) => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("답변을 삭제하시겠습니까?")) {
        deleteAnsReq(id);
      }
    },
    [deleteAnsReq]
  );

  useEffect(() => {
    if (deleteAnsRes.called && !deleteAnsRes.loading) {
      alert("삭제가 완료되었습니다.");
      window.location.reload();
    }
    if (deleteAnsRes.error) {
      alert(deleteAnsRes.error);
    }
  }, [deleteAnsRes]);

  const handleQuestionModify = useCallback(() => {
    // eslint-disable-next-line no-restricted-globals
    if (id && isActive && confirm("수정하시겠습니까?")) {
      questionModifyReq({
        id: id,
        subject: values.subject,
        author: values.author,
        content: values.content,
      });
    }
  }, [questionModifyReq, values, id, isActive]);

  useEffect(() => {
    if (questionModifyRes.called && questionModifyRes.data) {
      alert("수정이 완료되었습니다.");
      window.location.reload();
    }
    if (questionModifyRes.error) {
      alert(questionModifyRes.error);
    }
  }, [questionModifyRes]);

  const handleAnsDetailValue = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAnsDetailValue(e.target.value);
    },
    []
  );

  const handleAnsDetail = useCallback((memo: IAnswer) => {
    setAnsDetailValue(memo.content);
    setTargetAns(memo);
  }, []);

  return (
    <Layout category="QnA" page="QnA관리">
      <Wrapper>
        <QuestionInfoContainer>
          <FieldTitle>Question</FieldTitle>
          <QuestionInfo setQuestionDetail={setValues} questionDetail={values} />
          <ButtonContainer>
            <LoginButton
              isActive={isActive && location.state}
              onClick={handleQuestionModify}
            >
              수정
            </LoginButton>
          </ButtonContainer>
        </QuestionInfoContainer>
        <AnswerInfoContainer>
          <FieldTitle style={{ width: "100%" }}>Answers</FieldTitle>
          <AnswerTable
            handleDelete={handleDeleteAns}
            memos={memoList}
            handleOnClick={handleAnsDetail}
          />
          <BorderLine />
          <FieldTitle style={{ width: "100%" }}>Answer Detail</FieldTitle>
          <AnswerText
            value={ansDetailValue}
            onChange={(e) => handleAnsDetailValue(e)}
          />
          <AnswerButtonContainer>
            <AnswerButton
              style={{ marginRight: "20px" }}
              isActive={modifyAnsActive}
              onClick={() => {
                if (targetAns) handleModifyAns(targetAns);
              }}
            >
              수정
            </AnswerButton>
            <AnswerButton isActive={postAnswerActive} onClick={handlePostAns}>
              등록
            </AnswerButton>
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
  height: 80vh;
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
  flex: 1;
  margin-top: 30px;
  display: flex;
  justify-content: end;
  align-items: end;
`;
