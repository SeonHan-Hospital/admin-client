import styled from "styled-components";
import theme from "../../styles/theme";
import { Cell } from "./Cell";
import { dummyQuestions, header } from "./data";
import { IQuestion } from ".";
import { useState } from "react";

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
  const totalElement = 10;
  const size = 20;
  const number = 0;

  return (
    <ListContainer>
      <ListBox>
        <Root>
          <TableHeader header={header} />
          {values?.map((item, idx) => (
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
                        answer_id:
                          item.answer_id.length > 0 ? (
                            <ButtonDetail color="blue">
                              {item.answer_id.length}
                            </ButtonDetail>
                          ) : (
                            <ButtonDetail color="red">0</ButtonDetail>
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
