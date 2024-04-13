import { useCallback } from "react";
import { useAxios } from "./axios";
import { IGetQuestionParams, IModifyQuestionData } from ".";

export const useGetQuestionList = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (params: IGetQuestionParams) => {
      return request({
        url: `/question?page=${params.page}&limit=${params.limit}&author=${params.author}&content=${params.content}&subject=${params.subject}`,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useDeleteQuestion = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (id: number) => {
      return request({
        url: `/question/${id}`,
        method: "DELETE",
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useDetailQuestion = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (id: number) => {
      return request({
        url: `/question/${id}`,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useModifyQuestion = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (data: IModifyQuestionData) => {
      return request({
        url: `/question/${data.id}`,
        method: "PUT",
        data: {
          author: data.author,
          content: data.content,
          subject: data.subject,
        },
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};

export const useGetAnswerList = () => {
  const [request, response] = useAxios();

  const run = useCallback(
    (id: number) => {
      return request({
        url: `/answer?questionId=${id}&page=1&limit=10`,
      });
    },
    [request]
  );

  return [run, response] as [typeof run, typeof response];
};
