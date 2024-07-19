import AxiosInstance from '../lib/axiosInstance';

export const fetchData = async (searchQuery, page) => {

    const searchProps = searchQuery === 'null' ? 'batman' : searchQuery ;
    try {
        const response = await AxiosInstance.get(`/?s=${searchProps}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Fetch Data Error:', error.response?.data || error.message);
        throw error;
    }
}

export const fetchDetailData = async (id) => {

    try {
        const response = await AxiosInstance.get(`/?i=${id}`);
        return response.data;
    } catch (error) {
        console.error('Fetch Data Error:', error.response?.data || error.message);
        throw error;
    }
}
