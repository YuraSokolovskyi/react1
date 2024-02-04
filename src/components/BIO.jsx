import React from "react";
import "../styles/styles.css"
import bioImg from "../images/BIOImg.jpg";
import BIOEducationItem from "./BIOEducationItem";

const BIO = () => {
    return (
        <div className="taskContainer">
            <img src={bioImg} alt="bio image" className="bioImg"/>
            <div className="bioDescription">
                <p className="bioName">Yurii Sokolovskyi</p>
                <p className="bioAddress">2380 Baseline Rd. K2C 3J4, Ottawa, Canada</p>
                <p className="bioEmail"><span className="bioDesc">Email:</span> sokolovskiiyura@gmail.com</p>
                
                <p className="bioEducation">Education:</p>
                <ul className="bioEducationList">
                    <BIOEducationItem title="Carleton University" duration="2023 - Present"/>
                    <BIOEducationItem title="ItStep" duration="2021 - Present"/>
                </ul>
            </div>
        </div>
    )
}

export default BIO;