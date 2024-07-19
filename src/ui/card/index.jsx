import React from 'react';
import { Link } from 'react-router-dom';

const CardUi = ({ title, year, imdbID, type, poster }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <img className="w-full h-auto object-cover" src={poster} alt={title} />
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex flex-col space-y-2">
                    <h2 className="text-xl font-bold text-gray-800">{title}</h2>
                    <p className="text-gray-600">{year}</p>
                    <p className="text-gray-500 capitalize">{type}</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex mt-3">
                    <Link to={`/movie/${imdbID}`} className="py-2 text-lg text-center rounded-md w-full text-white bg-teal-500 hover:bg-teal-600">
                        Detail movie
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardUi;
