import { useCallback, useState } from "react";
import { Layout } from "../../Components/Layout";
import { SearchBox } from "./SearchBar";
import { SearchBarDropDowns } from "./data";
import { IOption } from ".";
import styled from "styled-components";
import { Table } from "./Table";
import { PaginationContainer } from "../../Components/Pagination/PaginationContainer";

export const QnA = () => {
  const [searchOption, setSearchOption] = useState<IOption>(
    SearchBarDropDowns[0]
  );
  const [searchValue, setSearchValue] = useState<string>("");

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
        <Table />
        <PaginationContainer
          activePage={1}
          itemsCountPerPage={5}
          totalItemsCount={10}
          pageRangeDisplayed={5}
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
