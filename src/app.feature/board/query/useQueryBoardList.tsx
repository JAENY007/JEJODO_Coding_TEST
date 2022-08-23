import { useQuery } from '@tanstack/react-query';
import api from 'root.modules/api';
import {
  API_GET_BOARDLIST,
  API_GET_FILTERED_BOARDLIST,
  API_GET_SEARCHED_BOARDLIST,
} from 'root.modules/api/queryKey';

const requestAPI = async ({ queryKey }: any) => {
  const url = queryKey[0];
  const res = await api.GET(url);

  return res.data;
};

export const useQueryBoardList = () => {
  const queryKey = API_GET_BOARDLIST;
  const { data, isLoading, ...props } = useQuery([queryKey], requestAPI);

  return { ...props, isLoading, data };
};

export const useQueryFilteredBoardList = (buildingCount: string) => {
  const queryKey = API_GET_FILTERED_BOARDLIST(buildingCount);
  const { data, isLoading, ...props } = useQuery([queryKey], requestAPI);

  return { ...props, isLoading, data };
};

export const useQuerySearchedBoardList = (searchKeyword: string) => {
  const queryKey = API_GET_SEARCHED_BOARDLIST(searchKeyword);
  const { data, isLoading, ...props } = useQuery([queryKey], requestAPI);

  return { ...props, isLoading, data };
};
