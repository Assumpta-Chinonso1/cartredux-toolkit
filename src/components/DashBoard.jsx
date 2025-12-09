import React from 'react'
import {  useDispatch } from 'react-redux'
import { loginOut } from '../Auth/authSlics'

const DashBoard = () => {
  const dispatch = useDispatch()
 

  return (
    <div className="max-w-sm ml-1 mt-2 p-6 ">
      <h1 className="text-2xl font-bold mb-1 dark:text-white">
       
      </h1>

      <button
        onClick={() => dispatch(loginOut())}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashBoard
