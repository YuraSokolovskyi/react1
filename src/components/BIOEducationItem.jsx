import React from "react";

const BIOEducationItem = (props) => {
    return(
        <li className="bioEducationListItem">
            <p className="bioEducationListItemTitle">{props.title}</p>
            <p className="bioEducationListItemDuration">{props.duration}</p>
        </li>
    )
}

export default BIOEducationItem
