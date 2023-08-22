import React from 'react'
import "./CheckBoxDayNight.css"

const CheckBoxDayNight = () => {
  return (
    <div className='container' >
        <label>
            <input type="checkbox" />
            <span className="check"></span>
        </label>
    </div>
  )
}

export default CheckBoxDayNight