import styled from "styled-components";
import { Dropdown } from "../../Components/Dropdown";
import { SearchBarDropDowns } from "./data";
import { ISearchBarProps } from ".";
import theme from "../../styles/theme";

export const SearchBox = ({
  active,
  onSelected,
  searchValue,
  handleSearchValue,
}: ISearchBarProps) => {
  return (
    <Wrapper>
      <DropDownContainer>
        <Dropdown
          options={SearchBarDropDowns}
          defaultOption={SearchBarDropDowns[0]}
          active={active}
          onSelected={onSelected}
        />
      </DropDownContainer>
      <SearchInput
        placeholder="검색어를 입력하세요"
        value={searchValue}
        onChange={(e) => handleSearchValue(e)}
      />
      <LoginButton isActive={!!searchValue}>검색</LoginButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropDownContainer = styled.div`
  width: 15%;
`;

const SearchInput = styled.input`
  width: 50%;
  padding: 0 5px;
  height: 45px;
  border: 1px solid ${theme.palette.border};
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
  width: 10%;
  height: 48px;
  color: ${theme.palette.white};
  font-weight: bold;
  background-color: ${({ isActive }) =>
    isActive ? theme.palette.primary : theme.palette.blackLighter};
`;
