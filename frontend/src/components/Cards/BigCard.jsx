import React from 'react';
import { Link } from 'react-router-dom';

const BigCard = ({ lnk, imageSrc, tag, text }) => {
    return (
        <Link to={lnk}>
            <div className='max-w-screen mx-auto mb-3 pb-2'>
                <div className="relative w-[305px] h-[171px] group overflow-hidden rounded-md shadow-lg">
                    <img
                        src={imageSrc}
                        alt={tag || "Image"}
                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                    {tag ? (
                        <div className="absolute bottom-0 left-0 bg-white text-red-600 text-xsbold px-2 py-1 font-bold">
                            {tag}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <h4 className='text-xl font-bold mb-2 mt-2 hover:underline hover:text-gray-700'>
                        {text}
                    </h4>
                </div>
            </div>
        </Link>
    );
};

export default BigCard;
