import React from 'react'

const AddAndSubBtn = ({stock}) => {
  return (
    <div class="flex flex-col gap-5">
  <div class="flex flex-col gap-6">
    <div class="flex gap-6">
      <div class="flex items-center justify-center w-8 h-8 bg-neutral-900 rounded-md">
        <button
          class="w-8 h-8 bg-gray-300 rounded-lg shadow-[10px_10px_8px_rgba(0,0,0,0.377),_inset_1.5px_1.5px_2px_#fff,_inset_-3.2px_-3.2px_8px_#c7c3c0] transition-all duration-100 hover:scale-95"
        >
          <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 fill-gray-600 transition-all duration-100"
          >
            <path d="M200-440v-80h560v80H200Z"></path>
          </svg>
        </button>
      </div>
      <p>{stock}</p>
      <div class="flex items-center justify-center w-8 h-8 bg-neutral-900 rounded-md">
        <button
          class="w-8 h-8 bg-gray-300 rounded-lg shadow-[10px_10px_8px_rgba(0,0,0,0.377),_inset_1.5px_1.5px_2px_#fff,_inset_-3.2px_-3.2px_8px_#c7c3c0] transition-all duration-100 hover:scale-95"
        >
          <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 fill-gray-600 transition-all duration-100"
          >
            <path
              d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  
</div>

  )
}

export default AddAndSubBtn
