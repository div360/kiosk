import React from "react";
import pic from "../images/mitLogo.png"
import pic1 from "../images/lock.png"
import './otp.css'

export default function Otp(){
    return(
        <>
        <div className="otp">
        <header>
            <nav>
                <div className="blue-box">
                    <div className="white-box">
                        <img class="logo" src={pic} alt="MIT Logo" />
                    </div>
                    <p class="logo-txt"><strong>MIT World Peace University</strong> | Pune</p>
                </div>
            </nav>
        </header>
        <body>
        <div class="container">
            <img className="lock-img" src={pic1} alt="" />
            <p>A One Time Password has been sent to registered mobile number and email
            Please enter the OTP below to verify.</p>
            <div className="input-box">
            <div class="userInput">
                <input type="text" id='ist' maxlength="1" />
                <input type="text" id="sec" maxlength="1" />
                <input type="text" id="third" maxlength="1" />
                <input type="text" id="fourth" maxlength="1"/>
            </div>
            </div>
            <button>Verify</button>
        </div>
    </body>
    <footer>
        <div className="back-button"></div>
        <span id="">&#8592;</span>
    </footer>
    </div>
    </>
    )
}