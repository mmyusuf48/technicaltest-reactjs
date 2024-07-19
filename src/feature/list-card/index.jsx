import React, {useState} from 'react'
import { useFetchData } from './hooks/useGet';
import CardUi from '../../ui/card';
import { MdOutlineMovie } from "react-icons/md";
import SearchUi from '../../ui/search';
import SkeletonCardUid from '../../ui/skeleton/card';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const ListMovieFeature = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1)
    const { data, isLoading } = useFetchData(searchQuery, page);
    const [totalPage, setTotalPage] = useState(10);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setPage(1)
    };

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
        setTotalPage((prevTotal) => prevTotal + 10);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
            setTotalPage((prevTotal) => prevTotal - 10);
        }
    };
   
    return (
        <div className='p-8'>
            <div className="flex justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg mb-6">
                <div className='flex gap-4 items-center'>
                    <MdOutlineMovie size={30}/>
                    <h1 className="text-3xl font-bold">List of Movies</h1>
                </div>
                <SearchUi onSearch={handleSearch}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            { isLoading ? (
                [...Array(8)].map((_, index) => (
                    <div className="" key={index}>
                        <SkeletonCardUid/>
                    </div>
                ))
            ) : (
                data?.Search?.map((movie) => (
                    <CardUi
                        key={movie.imdbID}
                        title={movie.Title}
                        year={movie.Year}
                        imdbID={movie.imdbID}
                        type={movie.Type}
                        poster={movie.Poster}
                    />
                ))
            )}
            </div>
            <div className="flex justify-between mt-4">
            <div className="">
                    {totalPage} pages for {data?.totalResults || 0} results
                </div>
                <div className="flex gap-4">
                    <button 
                        onClick={handlePreviousPage}
                        disabled={page === 1}
                        className="bg-blue-500 text-white px-2 py-1 rounded-lg disabled:opacity-50"
                    >
                        <MdKeyboardDoubleArrowLeft/>
                    </button>
                    <p>page {page}</p>
                    <button 
                        onClick={handleNextPage}
                        className="bg-blue-500 text-white px-2 py-1 rounded-lg"
                    >
                        <MdKeyboardDoubleArrowRight/>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ListMovieFeature
