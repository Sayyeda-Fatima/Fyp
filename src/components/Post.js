import React, { useContext } from "react";
import './Post.css';
import Sidebar from './Sidebar';
import Loader from "./Loader";
 import {InscribleContext} from '../context/Context';


const Post = () => {

    const {isLoading, postsArr} = useContext(InscribleContext);

    // useEffect(() => {
    //     const data = getAllImages();
    //     setImage(data);
    // },[]);

    return (
        <>
            <Sidebar />
            <div className="container post-main-container">
                {!isLoading ? 
                    postsArr
                    : <Loader/>}
            </div>
        </>
    )
}

export default Post;