import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-epilogue font-semibold text-[16px] leading-[22px] text-[#353537] mb-[10px]">{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#afaeae] bg-transparent font-epilogue text-gray-800 text-[14px] placeholder:text-[#929292] rounded-[10px] sm:min-w-[300px]"
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#afaeae] bg-transparent font-epilogue text-gray-800 text-[14px] placeholder:text-[#929292] rounded-[10px] sm:min-w-[300px]"
        />
      )}
    </label>
  )
}

export default FormField