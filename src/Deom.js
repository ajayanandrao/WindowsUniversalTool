import React from 'react'
import "./demo.scss";

const Deom = () => {
    return (
        <>
            <div className="center">
                <div className="border mt-5">
                <ol>
                    <li style={{color:"red"}}>550 - लाकडी खेळणी </li>
                    <li style={{color:"red"}}>100 - चष्मा </li>
                    <li style={{color:"red"}}>200 - हॉटेल पनीर जेवण</li>
                    <li>200 -  2 चष्मा </li>
                    <li>400 -  चड्डी </li>
                    <hr/>
                    <h4>self Total:- {550 + 100 + 200 + 600 + 200 + 400}</h4>
                        <h7> </h7>
                        <ol>
                            <li>{550-183} - तुजी लाकडी खेळणी एकूण </li>
                            <li>100 - चष्मा </li>
                            <li>200 - हॉटेल पनीर जेवण </li>
                        </ol>
                    <h4 style={{color:"green"}}>Group Total:- {367 + 100 + 200}</h4>


                </ol>
                </div>
            </div>
        </>
    )
}

export default Deom