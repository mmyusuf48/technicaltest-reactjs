import React from 'react';

const SkeletonCardUid = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse">
            <div className="bg-gray-300 h-60 w-full"></div>
            <div className="p-4">
                <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
                <div className="bg-gray-300 h-4 w-1/2 mb-1"></div>
                <div className="bg-gray-300 h-4 w-1/3 mb-2"></div>
                <div className="bg-gray-300 h-4 w-1/4"></div>
            </div>
        </div>
    );
};

export default SkeletonCardUid;
