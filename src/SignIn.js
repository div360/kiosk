import React from "react";
import './signIn.css'
import logo from "./images/mitLogo.png"
import computerIcon from "./images/computer.png"

export default function SignIn(){

    return(
        <>
        <div className="SignIn">
        <svg className="hero" width="926" height="720" viewBox="0 0 945 720" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M917.39 851.561C763.903 1138.87 428.454 1116.64 141.968 963.592C-144.519 810.546 -254.887 428.743 -101.4 141.43C52.0876 -145.883 393.511 -370.302 679.997 -217.256C840.548 -131.487 493.357 232.576 527.137 398.286C553.635 528.269 984.861 725.261 917.39 851.561Z" fill="#12428A"/>
            <path d="M-276.921 738.07L65.4304 920.959L407.782 1103.85M917.39 851.561C763.903 1138.87 428.454 1116.64 141.968 963.592C-144.519 810.546 -254.887 428.743 -101.4 141.43C52.0876 -145.883 393.511 -370.302 679.997 -217.256C840.548 -131.487 493.357 t232.576 527.137 398.286C553.635 528.269 984.861 725.261 917.39 851.561Z" stroke="#0E4DAC"/>
            </svg>
        <img id="computer-icon" src={computerIcon} alt="icon" />
        <div className="container">
            <img id="logo" src={logo} alt="MIT Logo" />
            <input type="number"  label="Enter ERP Number" />
        <button>Sign In</button>
        </div>
        </div>
        </>
    )
}