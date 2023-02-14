import React from "react";
import './Sidebar.css'

const Sidebar = ()=>{
    return(
        <div className="main-div-sidebar">
            <div className="inscrible-title">
                <h1 id="inscrible-title-text">Inscrible</h1>
            </div>
            <hr />
            <div className="item-container">
                <span className="item">Home</span>
            </div>
            <div className="item-container">
                <span className="item">Search</span>
            </div>
            <div className="item-container">
                <span className="item">Reels</span>
            </div>
            <div className="item-container">
                <span className="item">Messages</span>
            </div>
            <div className="item-container">
                <span className="item">Notifications</span>
            </div>
            <div className="item-container">
                <span className="item">Create</span>
            </div>
            <div className="item-container">
                <span className="item">Profile</span>
            </div>
        </div>
    )
}

export default Sidebar;