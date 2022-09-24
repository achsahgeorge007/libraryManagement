import React from 'react'
import "./../styles/loader.css";

function LoaderPage() {
  return (
    <div id="loader-wrapper" className="loader-wrapper">
      <div className="preData">
        <h2>Loading...</h2>
      </div>

      <div id="loader" className="loader pausado">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default LoaderPage