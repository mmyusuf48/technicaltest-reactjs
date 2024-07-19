import React from 'react';
import { useFetchDetailData } from './hooks/useGet';
import SkeletonMovieDetailUi from '../../ui/skeleton/detail-movie';

const MovieDetailFeature = ({id}) => {
    const { data: detailData, isLoading } = useFetchDetailData(id);

    return (
        <div className='p-8 h-screen'>
            { isLoading ? (
                <SkeletonMovieDetailUi/>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2'>
                    <div className=" flex justify-center items-center">
                        <img src={detailData?.Poster} alt={detailData?.Title} className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-full max-h-[800px] object-contain" />
                    </div>
                    <div className="p-4">
                        <h1 className="text-3xl font-bold mb-4">{detailData?.Title}</h1>
                        <p><strong>Year:</strong> {detailData?.Year}</p>
                        <p><strong>Rated:</strong> {detailData?.Rated}</p>
                        <p><strong>Released:</strong> {detailData?.Released}</p>
                        <p><strong>Runtime:</strong> {detailData?.Runtime}</p>
                        <p><strong>Genre:</strong> {detailData?.Genre}</p>
                        <p><strong>Director:</strong> {detailData?.Director}</p>
                        <p><strong>Writer:</strong> {detailData?.Writer}</p>
                        <p><strong>Actors:</strong> {detailData?.Actors}</p>
                        <p><strong>Plot:</strong> {detailData?.Plot}</p>
                        <p><strong>Language:</strong> {detailData?.Language}</p>
                        <p><strong>Country:</strong> {detailData?.Country}</p>
                        <p><strong>Awards:</strong> {detailData?.Awards}</p>
                        <p><strong>Metascore:</strong> {detailData?.Metascore}</p>
                        <p><strong>IMDb Rating:</strong> {detailData?.imdbRating}</p>
                        <p><strong>IMDb Votes:</strong> {detailData?.imdbVotes}</p>
                        <p><strong>Box Office:</strong> {detailData?.BoxOffice}</p>
                    </div>

                </div>
            )}
        </div>
    )
}

export default MovieDetailFeature
