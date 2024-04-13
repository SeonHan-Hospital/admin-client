import { useCallback, useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { SearchBox } from "./SearchBar";
import { SearchBarDropDowns } from "./data";
import { IOption, IQuestion } from ".";
import styled from "styled-components";
import { Table } from "./Table";
import { PaginationContainer } from "../../Components/Pagination/PaginationContainer";
import { useDeleteQuestion, useGetQuestionList } from "../../hooks/api";
import { dateHandler } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

export const QnA = () => {
  const [searchOption, setSearchOption] = useState<IOption>(
    SearchBarDropDowns[0]
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const [tableDatas, setTableDatas] = useState<IQuestion[]>([]);
  const [totalElement, setTotalElement] = useState(0);
  const [req, res] = useGetQuestionList();
  const [deleteReq, deleteRes] = useDeleteQuestion();
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (id: number) => {
      navigate("/detail", {
        state: {
          id,
        },
      });
    },
    [navigate]
  );

  const handleDelete = useCallback(
    (id: number) => {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("문의를 삭제하시겠습니까?")) {
        deleteReq(id);
      }
    },
    [deleteReq]
  );

  useEffect(() => {
    if (deleteRes.called) {
      alert("문의가 삭제되었습니다.");
      window.location.reload();
    }
  }, [deleteRes]);

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
      setTableDatas(res.data.rows.slice(0, 10));
      setTotalElement(res.data.count);
    }
  }, [res.called, res.data]);

  const handleSearchValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  const handleSearchOption = useCallback((selected: IOption) => {
    setSearchOption(selected);
  }, []);

  return (
    <Layout page="접수현황" category="QnA">
      <Wrapper>
        <SearchBox
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
          onSelected={handleSearchOption}
          active={searchOption}
        />
        <Table
          handleDelete={handleDelete}
          handleNavigate={handleNavigate}
          tableData={tableDatas}
          totalElement={totalElement}
          size={10}
          number={0}
        />
        <PaginationContainer
          activePage={1}
          itemsCountPerPage={10}
          totalItemsCount={totalElement}
          pageRangeDisplayed={10}
          onPageChange={(page) => {}}
        />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
