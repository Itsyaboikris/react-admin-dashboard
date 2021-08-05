import React from 'react';
import "./topbar.css";
import {Language, NotificationsNone, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconsContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconsContainer">
                        <Settings/>
                    </div>
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt="" className="topAvatar"/>
                </div>
            </div>
        </div>
    )
}
