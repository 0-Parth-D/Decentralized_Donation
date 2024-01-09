import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles, remaining }) => {
  const disableBtn = remaining <=0 ? 'bg-gray-400' : '';
  return (
    <button
      disabled={remaining===0}
      type={btnType}
      className={`font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] ${styles} ${disableBtn}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton