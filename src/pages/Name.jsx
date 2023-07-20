import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import{ImMenu} from 'react-icons/im'

const about = () => {
  return (
    <div className='bg-black text-white flex justify-between sm:flex-1 w-[100%] sm:w-[100%]'>
      <h1 className='' id='textName'>Lucy Njambi</h1>
      <div className=''><ImMenu/></div>
    </div>
  )
}

export default about