import { IOption } from ".";

export const SearchBarDropDowns: IOption[] = [
  {
    id: 0,
    label: "제목",
    path: "subject",
  },
  {
    id: 1,
    label: "내용",
    path: "content",
  },
  {
    id: 2,
    label: "작성자",
    path: "author",
  },
];

export const dummyQuestions = [
  {
    id: 3,
    author: "asd",
    subject: "위치 문의",
    content:
      "asdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasdasdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [21],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 4,
    author: "asd",
    subject:
      "위치 문의 위치 문의 위치 문의 위치 문의 위치 문의 위치 문의 위치 문의 위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 5,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [1, 2],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 6,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [1, 2],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 7,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [12],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 12,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [1, 2],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 13,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [1, 2],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 14,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [1, 2],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 15,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [1, 2],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
  {
    id: 16,
    author: "asd",
    subject: "위치 문의",
    content: "asdasdadsadasdsadasdasdasdasd",
    QnA_number: 1,
    answerId: [],
    createdAt: "2021-03-22",
    updatedAt: "2023-02-11",
  },
];

export const statusType = [
  { id: "1", label: "승인" },
  { id: "0", label: "미승인" },
];

export const header = [
  {
    id: "id",
    minWidth: 50,
    title: "No",
    wrapWidth: 1,
    align: "center",
  },
  {
    id: "author",
    minWidth: 150,
    align: "center",
    title: "작성자",
  },
  {
    id: "subject",
    minWidth: 150,
    align: "center",
    title: "제목",
  },
  {
    id: "content",
    minWidth: 400,
    align: "center",
    title: "내용",
  },
  {
    id: "answerId",
    minWidth: 70,
    title: "답변",
    align: "center",
  },
  {
    id: "delete",
    minWidth: 70,
    title: "문의 삭제",
    align: "center",
  },
  {
    id: "modify",
    minWidth: 70,
    title: "문의 수정",
    align: "center",
  },
  {
    id: "createdAt",
    minWidth: 150,
    title: "게시일",
    align: "center",
  },
  {
    id: "updatedAt",
    minWidth: 150,
    title: "수정일",
    align: "center",
  },
];

export const dummyAnswers = [
  {
    id: 0,
    createdAt: "2022-10-19 12:33:23",
    modifiedAt: "2022-10-19 20:03:45",
    modifiedBy: "me",
    contents: "memoTable",
  },
  {
    id: 1,
    createdAt: "2022-10-19 12:33:23",
    modifiedAt: "2022-10-19 20:03:45",
    modifiedBy: "me",
    contents: "memoTable",
  },
  {
    id: 2,
    createdAt: "2022-10-19 12:33:23",
    modifiedAt: "2022-10-19 20:03:45",
    modifiedBy: "me",
    contents: "memoTable",
  },
  {
    id: 3,
    createdAt: "2022-10-19 12:33:23",
    modifiedAt: "2022-10-19 20:03:45",
    modifiedBy: "me",
    contents: "memoTabadsadsqdqsdqsdqsdqsdqsdqsdle",
  },
  {
    id: 4,
    createdAt: "2022-10-19 12:33:23",
    modifiedAt: "2022-10-19 20:03:45",
    modifiedBy: "me",
    contents: "memoTable",
  },
  {
    id: 5,
    createdAt: "2022-10-19 12:33:23",
    modifiedAt: "2022-10-19 20:03:45",
    modifiedBy: "me",
    contents: "memoTable",
  },
  {
    id: 6,
    createdAt: "2022-10-19 12:33:23",
    modifiedAt: "2022-10-19 20:03:45",
    modifiedBy: "me",
    contents: "memoTable",
  },
];
