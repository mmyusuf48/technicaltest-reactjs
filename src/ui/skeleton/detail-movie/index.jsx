import React from 'react';

const SkeletonMovieDetailUi = () => {
    return (
        <div className='p-8 h-screen animate-pulse'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div className="bg-gray-300 shadow-lg rounded-lg overflow-hidden max-w-full max-h-[800px] flex justify-center items-center">
                    <div className="w-48 h-72 bg-gray-400 rounded"></div>
                </div>
                <div className="p-4">
                    <div className="h-8 bg-gray-300 mb-4 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                    <div className="h-6 bg-gray-300 mb-2 rounded"></div>
                </div>
            </div>
        </div>
    );
}

export default SkeletonMovieDetailUi;
