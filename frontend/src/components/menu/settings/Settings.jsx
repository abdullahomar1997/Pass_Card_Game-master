import React from 'react'
import { useState } from 'react'
import "./Settings.css"

const Settings = () => {

  const [sound,setSound] = useState(true);
  const [music,setMusic] = useState(false);

  const HandleSound = (e) => {
    console.log(e.target.value);
    setSound(!sound);
  }

  const HandleMusic = (e) => {
    console.log(e.target.value);
    setMusic(!music);
  }

  return (
    <>
    <div className='settings_container'>
      <label className='title' htmlFor="">Settings</label>
    <div>
        <label htmlFor="">UserName </label>
        <input type="text" />
    </div>
    <div>
        <label htmlFor="">Language </label>
        <input type="text" />
    </div>
    <div>
       {/* <label htmlFor="">Sound</label> */}
       <input type="checkbox" onChange={HandleSound} name="sound" value="sound" checked={sound}  />
       <span className='check'></span>
    </div>
    <div>
    <label htmlFor="">Music</label>
    <input type="checkbox" onChange={HandleMusic} name="music" value="music" checked={music} />

    </div>
    <div>
       <button>Rate</button>
    </div>
    <div>
       <button>More Games</button>
    </div>
    </div>
    </>
  )
}

export default Settings