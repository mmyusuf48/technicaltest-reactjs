import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../service/apiService';

export const useFetchData = (searchQuery, page) => {
    const [queryKey, setQueryKey] = useState(searchQuery);

    useEffect(() => {
        setQueryKey(searchQuery.length > 0 ? searchQuery : 'null' );
    }, [searchQuery]);

    return useQuery({
        queryKey: ['data', queryKey, page],
        queryFn: () => fetchData(queryKey, page),
        enabled: !!queryKey,
    });
};


