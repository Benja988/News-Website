import React from 'react'
import { Link } from 'react-router-dom'

const TextOnly = ({link, text}) => {
  return (
    <div>
        <Link to={link}>
        <div className='flex flex-col justify-start mb-4'>
            <hr className='flex-grow border-t-1 border-gray-300 mb-4' />
            <p className='self-start hover:text-gray-700 hover:underline text-base'>{text}</p>
        </div>
        </Link>
    </div>
  )
}

export default TextOnly