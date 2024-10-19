import React from 'react'

const DetialsLoading = () => {
  return (
<div
  class="flex flex-col bg-neutral-300 w-full h-64 animate-pulse rounded-xl p-4 gap-4"
>
  <div class="flex flex-col gap-10">
    <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
    <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
    <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
    <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
  </div>
</div>

  )
}

export default DetialsLoading