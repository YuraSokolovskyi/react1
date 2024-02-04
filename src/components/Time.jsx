import React, {useEffect, useState} from "react";
import "../styles/styles.css"

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    }, []);
    
    return (
        <div className="taskContainer">
            <p className="time">Time: {currentTime.toLocaleTimeString()}</p>
        </div>
    )
}

export default Time