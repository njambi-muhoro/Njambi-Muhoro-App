import React from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import{ImMenu} from 'react-icons/im'

const about = () => {
  return (
    <div className='bg-black text-white flex justify-between'>
      <h1 className='' id='textName'>Lucy Njambi</h1>
      <div className=''><ImMenu/></div>
    </div>
  )
}

export default about