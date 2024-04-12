import styled from "styled-components";
import theme from "../../styles/theme";
import { Cell } from "./Cell";
import { dummyQuestions, header } from "./data";
import { IQuestion } from ".";
import { useEffect, useState } from "react";
import { useGetQuestionList } from "../../hooks/api";
import { dateHandler } from "../../utils/functions";

interface ITableHeader {
  id?: string;
  isCheckBox?: boolean;
  minWidth?: number;
  title?: string;
  headerWidth?: number;
  width?: number;
  wrapWidth?: number;
  align?: string;
}

const TableHeader = ({ header }: { header: ITableHeader[] }) => {
  return (
    <Header>
      {header.map((x, index) => (
        <Cell
          key={index}
          minWidth={x.minWidth}
          wrapWidth={x.wrapWidth}
          align={x.align}
        >
          {x.title}
        </Cell>
      ))}
    </Header>
  );
};

export const Table = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [values, setValues] = useState<IQuestion[]>(dummyQuestions);
  const [totalElement, setTotalElement] = useState(0);
  // const totalElement = 10;
  const size = 10;
  const number = 0;
  const [questions, setQuestions] = useState<IQuestion[]>([]);

  const [req, res] = useGetQuestionList();

  useEffect(() => {
    req({
      page: 1,
      limit: 10,
      author: "",
      content: "",
      subject: "",
    });
  }, [req]);

  useEffect(() => {
    if (res.called && res.data) {
      res.data.rows.map((el: IQuestion) => {
        el.createdAt = dateHandler(el.createdAt);
        el.updatedAt = dateHandler(el.updatedAt);
        return 0;
      });
      setQuestions(res.data.rows.slice(0, 10));
      setTotalElement(res.data.count);
    }
  }, [res.called, res.data]);

  return (
    <ListContainer>
      <ListBox>
        <Root>
          <TableHeader header={header} />
          {questions?.map((item, idx) => (
            <Row key={idx}>
              {header.map((h: ITableHeader, index: number) => (
                <Cell
                  key={index}
                  minWidth={h.minWidth}
                  wrapWidth={h.wrapWidth}
                  align={h.align}
                >
                  {h.id
                    ? {
                        answer_id: item.answerId.length ? (
                          <ButtonDetail color="blue">
                            {item.answerId.length}
                          </ButtonDetail>
                        ) : (
                          <ButtonDetail color="red">답변 달기</ButtonDetail>
                        ),
                        delete: <ButtonDetail>삭제</ButtonDetail>,
                        modify: <ButtonDetail>수정</ButtonDetail>,
                      }[h.id] || item[h.id]
                    : totalElement - idx - size * number}
                </Cell>
              ))}
            </Row>
          ))}
        </Root>
      </ListBox>
    </ListContainer>
  );
};

const Header = styled.div`
  background: #f7f7f7;
  display: flex;

  align-items: center;
  border-bottom: 1px solid #ededed;
  width: 100%;
`;

const Root = styled.div`
  width: 100%;
  box-shadow: ${theme.palette.shadow01};
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #ededed;
  width: 100%;
`;

const ButtonDetail = styled.div<{ color?: string }>`
  text-decoration-line: underline;
  cursor: pointer;
  ${({ color }) => color && `color: ${color};`}
`;

const ListContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const ListBox = styled.div`
  overflow-y: visible;
  padding-bottom: -50px;
  margin-bottom: 50px;
`;
