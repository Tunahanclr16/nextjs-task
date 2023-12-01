import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const SliderBtn = ({title}) => {
  return (
    <a href="" className='flex items-center mt-8 cursor-pointer justify-center text-lg font-medium '>
    <span className='flex'>{title}</span> <FaChevronRight/>
    </a>
  )
}

export default SliderBtn
