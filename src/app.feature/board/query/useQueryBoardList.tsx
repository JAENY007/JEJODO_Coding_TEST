import { useQuery } from '@tanstack/react-query';
import api from 'root.modules/api';
import { API_GET_BOARDLIST } from 'root.modules/api/queryKey';

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
