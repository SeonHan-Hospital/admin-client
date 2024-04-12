import { useCallback } from "react";
import { useAxios } from "./axios";
import { IGetQuestionParams } from ".";

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
