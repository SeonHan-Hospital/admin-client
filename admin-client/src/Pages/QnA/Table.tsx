import styled from "styled-components";
import theme from "../../styles/theme";
import { Cell } from "./Cell";
import { header } from "./data";
import { IQuestion } from ".";

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

interface ITableProps {
  tableData: IQuestion[];
  totalElement: number;
  size: number;
  number: number;
  handleDelete: (id: number) => void;
  handleNavigate: (id: number) => void;
}

export const Table = ({
  tableData,
  totalElement,
  size,
  number,
  handleDelete,
  handleNavigate,
}: ITableProps) => {
  return (
    <ListContainer>
      <ListBox>
        <Root>
          <TableHeader header={header} />
          {tableData?.map((item, idx) => (
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
                        answerId: item.answerId.length ? (
                          <ButtonDetail
                            color="blue"
                            onClick={() => handleNavigate(item.id)}
                          >
                            {item.answerId.length}
                          </ButtonDetail>
                        ) : (
                          <ButtonDetail
                            color="red"
                            onClick={() => handleNavigate(item.id)}
                          >
                            답변 달기
                          </ButtonDetail>
                        ),
                        delete: (
                          <ButtonDetail onClick={() => handleDelete(item.id)}>
                            삭제
                          </ButtonDetail>
                        ),
                        modify: (
                          <ButtonDetail onClick={() => handleNavigate(item.id)}>
                            수정
                          </ButtonDetail>
                        ),
                        id: item.QnA_number,
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
