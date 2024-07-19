import "../../assets/styles/index.css"
import React from 'react'

const DefaultTamplateUi = ({ children }) => {
  return (
    <div>
        <div className="p-4 shadow-md ">
            <a href="/" className="flex items-center space-x-4">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AMoTtZJ1eWwstJQy3mYMQzyxt8_aYRb6sg&s"
                    alt="IMDB API Logo"
                    className="w-16 h-12 rounded"
                />
                <div>
                    <h1 className="text-lg font-bold text-gray-800">OmdbApi</h1>
                </div>
            </a>
        </div>
        <div>
            {children}
        </div>
        <div className='mt-8 py-4 flex justify-center border-t-2 shadow-md'>
            <div className="text-gray-600">
            &copy; {new Date().getFullYear()} Yusuf. All rights reserved.
            </div>
        </div>
    </div>
  )
}

export default DefaultTamplateUi
