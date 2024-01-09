import React from 'react'

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-gray-800 p-3 bg-[#ffffff] rounded-t-[10px] w-full text-center truncate">{value}</h4>
      <p className="font-epilogue font-medium text-[16px] text-[#ffffff] bg-[#cfc6f3] px-3 py-2 w-full rounded-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default CountBox