import React from 'react'

const OverViewPageCard = ({titel}) => {
  return (
    <div class="relative max-w-[300px] box-border rounded-lg bg-white font-[cursive] text-[20px] leading-[1.2rem] p-[1.4rem_0.5rem_0.3rem_4.5rem] 
    bg-[linear-gradient(#f5f5f0_1.1rem,#ccc_1.2rem)] bg-[length:100%_1.2rem] shadow-lg">
  
  {/* !-- Left Margin (Red Line)  */}
  <div class="absolute left-[3.3rem] top-0 h-full border-l-[1px] border-[#d88]"></div>

  <p class="m-0 text-black text-indent-[1rem] pb-[1.2rem] leading-[20px]">
    {titel}
  </p>

  {/* !-- Shadow Effects --*/}
  <div class="absolute bottom-[10px] left-[15px] w-[40%] h-[10px] shadow-[0_5px_14px_rgba(0,0,0,0.7)] skew-x-[-5deg] rotate-[-5deg] transition-all duration-300"></div>
  <div class="absolute bottom-[10px] right-[15px] w-[40%] h-[10px] shadow-[0_5px_14px_rgba(0,0,0,0.7)] skew-x-[5deg] rotate-[5deg] transition-all duration-300"></div>
</div>
  )
}

export default OverViewPageCard
