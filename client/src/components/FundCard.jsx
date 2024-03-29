import React from 'react';

import { tagType, thirdweb } from '../assets';
import { daysLeft } from '../utils';

const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline);
  const imgFilter = remainingDays <=0 ? 'filter grayscale' : '';
  const profileHidden = remainingDays <=0 ? 'invisible' : '';
  
  return (
    <div className={`sm:w-[288px] w-full rounded-[15px] bg-[#ffffff] cursor-pointer p-2`} onClick={handleClick}>
      <img src={image} alt="fund" className={`w-full h-[158px] object-cover rounded-[15px] ${imgFilter}`}/>

      <div className="flex flex-col p-4">
        <div className="flex flex-row items-center mb-[18px]">
          <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">DONATE</p>
        </div>

        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-gray-800 text-left leading-[26px] truncate">{title}</h3>
          <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{description}</p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px] truncate">Raised</p>
            <h4 className="font-epilogue font-semibold text-[14px] text-[#808191] leading-[22px]">{amountCollected} / {target} ETH</h4>
          </div>
          <div className="flex flex-col">
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#b2b3bd] sm:max-w-[120px] truncate">Days Left</p>
            <h4 className="font-epilogue font-semibold text-[14px] text-[#808191] leading-[22px]">{remainingDays}</h4>
          </div>
        </div>

        <div className={`flex items-center mt-[20px] gap-[12px] ${profileHidden}`}>
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>
        </div>
      </div>
    </div>
  )
}

export default FundCard