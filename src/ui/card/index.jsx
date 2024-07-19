import React from 'react';
import { Link } from 'react-router-dom';

const CardUi = ({ title, year, imdbID, type, poster }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img className="w-full h-auto object-cover" src={poster} alt={title} />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 mb-1">{year}</p>
                <p className="text-gray-500 mb-2 capitalize">{type}</p>
                <div className="flex justify-between">
                    <a
                        href={`https://www.imdb.com/title/${imdbID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        IMDb Link
                    </a>
                    <Link to={`/movie/${imdbID}`} className="text-blue-500 hover:underline">
                        Detail
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardUi;
