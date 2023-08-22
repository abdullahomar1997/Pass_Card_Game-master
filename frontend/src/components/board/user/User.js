import React from 'react'
import "./User.css"

const User = ({ player }) => {
    return (
        // <div className='block' >
        //     <div className="picture__block">
        //     </div>

        //     <div className="details__block">
        //         <h3 className='name__details'>{player.playerName}</h3>
        //         <div className="passcard__details">
        //             <div className="card__block">
        //                 <div className="card_image"></div>
        //                 <span className="card_number" >{player.numCards}</span>
        //             </div>

        //             <div className="pass__block">
        //                 <div className="pass_image"></div>
        //                 <span className="pass_number" >{player.numPasses}</span>
        //             </div>

        //         </div>
        //     </div>
        // </div>

        <div className="block2">
            <img src={require(`../../../assets/deck/blank.png`)} alt="pass" />
        </div>
    )
}

export default User