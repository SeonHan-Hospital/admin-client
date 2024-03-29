import styled from "styled-components";
import theme from "../../styles/theme";
import { dummyQuestions } from "../QnA/data";

export const QuestionInfo = () => {
  return (
    <Wrapper>
      <Row>
        <RowTitle style={{ borderTopLeftRadius: "10px" }}>No</RowTitle>
        <RowContent>{dummyQuestions[0].QnA_number}</RowContent>
      </Row>
      <Row>
        <RowTitle>작성자</RowTitle>
        <RowContent>{dummyQuestions[0].author}</RowContent>
      </Row>
      <Row>
        <RowTitle>제목</RowTitle>
        <RowContent>{dummyQuestions[0].subject}</RowContent>
      </Row>
      <Row>
        <RowTitle>내용</RowTitle>
        <RowContent>{dummyQuestions[0].content}</RowContent>
      </Row>
      <Row>
        <RowTitle>답변</RowTitle>
        <RowContent>{dummyQuestions[1].answer_id.length}</RowContent>
      </Row>
      <Row>
        <RowTitle>작성일</RowTitle>
        <RowContent>{dummyQuestions[0].createdAt}</RowContent>
      </Row>
      <Row last={true}>
        <RowTitle style={{ borderBottomLeftRadius: "10px" }}>수정일</RowTitle>
        <RowContent>{dummyQuestions[0].updatedAt}</RowContent>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  border: 1px solid ${theme.palette.border};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  color: #555;
`;

const Row = styled.div<{ last?: boolean }>`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-bottom: 1px solid ${theme.palette.border};
  ${({ last }) => last && "border-bottom: none;"}
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
  border-left: 1px solid ${theme.palette.border};
`;
