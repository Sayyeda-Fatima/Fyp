import React from "react";
import './Post.css';
import Sidebar from './Sidebar';
import { useState, useEffect } from "react";

const Post = () => {

    // const arr = ['../Images/596296.jpeg', '../Images/681016.jpg', '../Images/976013.jpg', '987919.jpg', '../Images/mosque.jpg', '../Images/rain.jpg', '../Images/spin.jpg', '../Images/white.jpg'];
    const [image, setImage] = useState("");

    const getImages = () => {
        
        const arr = ['../Images/596296.jpeg', '../Images/681016.jpg', '../Images/976013.jpg', '987919.jpg', '../Images/mosque.jpg', './rain.jpg', '../Images/spin.jpg', '../Images/white.jpg'];        
        const images = arr.map((item, i) => {
            console.log(item);
            return (
                <>
                    <div className="single-post-container" key={i}>
                        <span className="account-name">My Account</span>
                        <div className="image-container">
                                <a href={item} key={i} >
                                <img
                                    key={i}
                                    src="./rain.jpg"
                                    alt="new"
                                    className="image-list"
                                ></img>
                            </a>
                        </div>
                        <span className="account-name" >My Account:
                            <span className="description-text">This is the discription of my image</span>
                        </span>
                    </div>
                    <hr />
                </>
            );
        });

        setImage(images);
        
    };

    useEffect(() => {
        getImages();
    },[]);

    return (
        <>
            <Sidebar />
            <div className="container post-main-container">
                {image}
            </div>
        </>
    )
}

export default Post;