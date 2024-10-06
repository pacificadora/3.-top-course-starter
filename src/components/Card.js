import React from 'react'
import {FcLike} from 'react-icons/fc'

const Card = ({course}) => {
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative '>
        <img src={course.image.url} />
        <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 bottom-3 grid place-items-center'>
          <button>
              <FcLike fontSize='1.75rem'></FcLike>
          </button> 
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white mt-2'>{course.description}</p>
      </div>
    </div>
  )
}

export default Card
