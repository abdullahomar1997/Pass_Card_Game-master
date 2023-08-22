import React from 'react'

import investment from '../../assets/images/investment.svg'
import propertyBond from '../../assets/images/property_bond_2.svg'
import basicLoan from '../../assets/images/basic_loan.svg'

import "./Home.css"

function Home() {
    return (
        <div>
            <div className="gradient-text">
                <h1 className="game_title">PASS </h1>
                {/* <h1>Welcome to The Financial Experts&#8482; Online Calculators</h1> */}
                {/* <h2>PLEASE SELECT ONE OF OUR CALCULATORS TO BEGIN</h2> */}
            </div>


            <div className="flex-container">

                <div className="flex-item red-flex-item flex-container-box red-anchor">
                    <h1 className="red-h1">OFFLINE</h1>
                    <div className="box red-box">
                        <img alt="" width="100%" height="100%" src={investment} />
                    </div>

                </div>

                <div className="flex-item blue-flex-item flex-container-box">
                    <h1 className="blue-h1">ONLINE</h1>
                    <div className="box blue-box">
                        <img alt="" width="100%" height="100%" src={propertyBond} />
                    </div>
                </div>


                <div className="flex-item green-flex-item flex-container-box">
                    <h1 className="green-h1">SHARE</h1>
                    <div className="box green-box">
                        <img alt="" height="100%" width="100%" src={basicLoan} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;