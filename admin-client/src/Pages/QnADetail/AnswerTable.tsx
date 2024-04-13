import styled from "styled-components";
import { IAnswer } from "../QnA";
import { dateHandler } from "../../utils/functions";

export interface TableProps {
  memos: IAnswer[];
  handleOnClick: (memo: IAnswer) => void;
}

export const AnswerTable = ({ memos, handleOnClick }: TableProps) => {
  return (
    <Block>
      <TableStyles>
        <thead>
          <tr>
            <th>등록일</th>
            <th>수정일</th>
            <th>답변요약</th>
            <th>작성자</th>
            <th>답변전체</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((memo, index) => (
            <tr key={index}>
              <td>{dateHandler(memo.createdAt)}</td>
              <td>{dateHandler(memo.updatedAt)}</td>
              <td>{memo.content}</td>
              <td>{memo.author}</td>
              <td onClick={() => handleOnClick(memo)}>전체보기</td>
            </tr>
          ))}
        </tbody>
      </TableStyles>
    </Block>
  );
};

const Block = styled.div`
  overflow-y: scroll;
  max-height: 25%;
  height: 100%;
  width: 100%;
`;

const TableStyles = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f8f8f8;

  thead {
    position: sticky;
    top: 0;
    background-color: #f8f8f8;
  }

  th,
  td {
    text-align: center;
  }

  th {
    color: #464646;
    font-size: 14px;
    background-color: #f8f8f8;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    font-weight: 400;
    flex: 1;
  }

  tr {
    height: 40px;
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #ececec;
    align-items: center;
    & > td:last-child {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  td {
    width: 20%;
    font-size: 14px;
    color: #464646;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    justify-content: center;
    font-weight: 400;
  }
`;
