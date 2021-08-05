import React from "react";
import "./widgetSmall.css";
import {Visibility} from "@material-ui/icons";

export default function WidgetSmall() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Gunn</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button  className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Gunn</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button  className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Gunn</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button  className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Gunn</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button  className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Gunn</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button  className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Gunn</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button  className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
