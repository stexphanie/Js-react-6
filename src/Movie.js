import React from "react";
import Star from "./star.png";
import "./index.css";

export default function Movie(props) {
    function starLogos(grade) {
        let getStars = [];
        for (var i = 0; i < grade; i++) {
            getStars.push(<img src={Star} alt="star" width="30px" />);
        }

        return getStars;
    }

    return (
        <div>
            <li className="list-group-item">
                {props.item.title}
                <button
                    id="delete-btn"
                    className="btn btn-sm btn-danger float-end"
                    onClick={() => {
                        props.deleteList(props.item.id);
                    }}
                >
                    X
                </button>
                {starLogos(props.item.grade)}
            </li>
        </div>
    );
}
