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

export interface IAnswer {
  id: number;
  questionId: number;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPostAnswerData {
  questionId: number;
  author: string;
  content: string;
}
