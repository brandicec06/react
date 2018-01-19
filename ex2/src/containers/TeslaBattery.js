import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../Components/TeslaNotice/TeslaNotice.js';
import TeslaCar from '../Components/TeslaCar/TeslaCar';

class TeslaBattery extends React.Component {
   
    render(){
        return(
            <form className="tesla-battery">
                <h1> Range Per Charge </h1>
                <TeslaCar />
                <TeslaNotice />
            </form>
           
        )
    }
}

export default TeslaBattery;