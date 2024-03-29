import styled from "styled-components";
import { Layout } from "../../Components/Layout";
import theme from "../../styles/theme";
import { QuestionInfo } from "./QuestionInfo";

export const QnADetail = () => {
  return (
    <Layout category="QnA" page="QnA관리">
      <Wrapper>
        <QuestionInfoContainer>
          <QuestionInfo />
        </QuestionInfoContainer>
        <AnswerInfoContainer>answer</AnswerInfoContainer>
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
  width: 50%;
  display: flex;
  justify-content: center;
`;
