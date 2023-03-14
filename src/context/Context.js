import React,{useState, useEffect} from 'react';


import image0 from "../Images/596296.jpeg";
import image1 from "../Images/681016.jpg";
import image2 from "../Images/976013.jpg";
import image3 from "../Images/987919.jpg";
import image4 from "../Images/mosque.jpg";
import image5 from "../Images/rain.jpg";

export const InscribleContext=React.createContext();


export const InscribleProvider=({children})=>{

    // const [formData, setformData] = useState({
    //     description: ""
    // });

    const [postsArr, setpostsArr] = useState([]);

    // const [connectedAccounts, setconnectedAccounts] = useState("");

    // const [isConnected, setisConnected] = useState(false)
    const [isLoading, setisLoading] = useState(false);

    const getAllImages = async() =>{
        setisLoading(true);
        const arr = [image0, image1, image2, image3, image4, image4, image5];        
       const images = arr.map((item, i) => {
                return (
                    <>
                        <div className="single-post-container" key={i}>
                            <span className="account-name">My Account</span>
                            <div className="image-container">
                                    <a href={item} key={i} >
                                    <img
                                        key={i}
                                        src={item}
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

            setTimeout(() => {
                setisLoading(false);
            }, 10000);

            setpostsArr(images);
            
    }

    useEffect(() => {
        getAllImages();
    },[]);

    return(
        <InscribleContext.Provider value={{
        isLoading,
        postsArr,
       getAllImages}}>
            {children}
        </InscribleContext.Provider>
    );
}