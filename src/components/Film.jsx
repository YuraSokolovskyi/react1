import React from "react";
import movieImg from "../images/InceptionImg.jpg"
import "../styles/styles.css"

const Film = () => {
    return (
        <div className="taskContainer">
            <img src={movieImg} alt="movie image" className="movieImg"/>
            <div className="movieDescription">
                <p className="movieTitle">Inception</p>
                <p className="movieDirector">Christopher Nolan</p>
                <p className="movieYear">2010</p>
                <p className="movieProduction">Warner Bros. Pictures; Legendary Pictures; Syncopy</p>
            </div>
        </div>
    )
}

export default Film