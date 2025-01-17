import React from 'react'

const PaginationService = ({currentpage,setCurrentpage}) => {
  return (
    <div>
      <div className="flex justify-between mt-4 mb-2">
          <button
          onClick={() => setCurrentpage((prev) => Math.max(prev - 1, 1))}
          disabled={currentpage === 1}
          className="btn btn-primary"
          >
            Previous Page
          </button>
          <span>
            Page 
          </span>
          <button
            onClick={() =>
                setCurrentpage((prev) => Math.min(prev + 1, totalPages))
            }
            
            className="btn btn-primary"
          >
            Next Page
          </button>
        </div>
    </div>
  )
}

export default PaginationService
