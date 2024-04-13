export interface IGetQuestionParams {
  page: number;
  limit: number;
  content: string;
  subject: string;
  author: string;
}

export interface IModifyQuestionData {
  id: number;
  author: string;
  subject: string;
  content: string;
}
