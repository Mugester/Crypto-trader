import React from 'react'

const Loading = () => {
  return (
    <center>
    <div style={{height: "300px", width: '300px', marginTop: '32vh'}} className=" text-center spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </center>
  )
}

export default Loading
