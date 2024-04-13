export interface IOption {
  id: string | number;
  label: string | number;
  path: string;
}

export interface ISearchBarProps {
  active: IOption;
  onSelected: (selected: IOption) => void;
  searchValue: string;
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IAccount {
  [index: string];
  id: number;
  email: string;
  name: string;
  mobile: string;
  adminType: string;
  fieldOffice?: string | null;
  basicAddr?: string | null;
  detailAddr?: string | null;
  authorizeType: string;
  status: boolean;
  createdAt: number;
  updatedAt: number;
  deleted: boolean;
  password?: string;
  password2?: string;
}

export interface IQuestion {
  [index: string];
  id: number;
  author: string;
  subject: string;
  content: string;
  QnA_number: number;
  answerId: number[];
  createdAt: string;
  updatedAt: string;
}

export interface ITableHeader {
  id?: string;
  isCheckBox?: boolean;
  minWidth?: number;
  title?: string;
  headerWidth?: number;
  width?: number;
  wrapWidth?: number;
  align?: string;
}
