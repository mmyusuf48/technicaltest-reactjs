import { useQuery } from '@tanstack/react-query';
import { fetchDetailData } from '../../../service/apiService';

export const useFetchDetailData = (id) => {

    return useQuery({
        queryKey: ['data', id],
        queryFn: () => fetchDetailData(id),
    });
};