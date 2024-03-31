import styled from "styled-components";
import theme from "../../styles/theme";
import React, { useCallback, useEffect, useRef } from "react";
import { IQuestion } from "../QnA";

interface IProps {
  questionDetail: IQuestion;
  setQuestionDetail: React.Dispatch<React.SetStateAction<IQuestion>>;
}

export const QuestionInfo = ({ questionDetail, setQuestionDetail }: IProps) => {
  const contentArea = useRef<any>();
  const subjectArea = useRef<any>();

  useEffect(() => {
    contentArea.current.style.height = contentArea.current.scrollHeight + "px";
    subjectArea.current.style.height = subjectArea.current.scrollHeight + "px";
  }, []);

  const handleContent = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      contentArea.current.style.height = "auto"; //height 초기화
      contentArea.current.style.height =
        contentArea.current.scrollHeight + "px";
      setQuestionDetail({ ...questionDetail, content: e.target.value });
    },
    [questionDetail, setQuestionDetail]
  );

  const handleSubject = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      subjectArea.current.style.height = "auto"; //height 초기화
      subjectArea.current.style.height =
        subjectArea.current.scrollHeight + "px";
      setQuestionDetail({ ...questionDetail, subject: e.target.value });
    },
    [questionDetail, setQuestionDetail]
  );

  return (
    <Wrapper>
      <Row>
        <RowTitle>No</RowTitle>
        <RowContent>{questionDetail.QnA_number}</RowContent>
      </Row>
      <Row>
        <RowTitle>작성자</RowTitle>
        <RowContent>{questionDetail.author}</RowContent>
      </Row>
      <Row>
        <RowTitle>제목</RowTitle>
        <RowInput
          value={questionDetail.subject}
          onChange={handleSubject}
          ref={subjectArea}
        />
      </Row>
      <Row>
        <RowTitle>내용</RowTitle>
        <RowInput
          onChange={handleContent}
          value={questionDetail.content}
          ref={contentArea}
        />
      </Row>
      <Row>
        <RowTitle>답변</RowTitle>
        <RowContent>{questionDetail.answer_id.length}</RowContent>
      </Row>
      <Row>
        <RowTitle>작성일</RowTitle>
        <RowContent>{questionDetail.createdAt}</RowContent>
      </Row>
      <Row last={true}>
        <RowTitle>수정일</RowTitle>
        <RowContent>{questionDetail.updatedAt}</RowContent>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  color: #555;
`;

const Row = styled.div<{ last?: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  min-height: 50px;
`;

const RowTitle = styled.div`
  ${theme.typography.title3}
  min-width: 20%;
  background-color: #f9f9f9;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const RowContent = styled.div`
  display: flex;
  padding: 10px;
  height: 100%;
  font-size: 13px;
  align-items: center;
  word-break: break-word;
  box-sizing: border-box;
`;

const RowInput = styled.textarea`
  /* all: unset; */
  display: flex;
  resize: none;
  padding: 10px;
  font-size: 13px;
  align-items: center;
  word-break: break-word;
  box-sizing: border-box;
  max-height: 250px;
  width: 80%;
`;
