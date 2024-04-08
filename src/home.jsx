import React from "react";
import "./home.css";
import image1 from "./img1.jpg";
import image3 from './img3.jpg';
import resume from './Nithya Resume.pdf';
class home extends React.Component {
    render() {
        return (
            <div className="overall" id="home">
                <div className="intro">
                    <h1>Hello...</h1>
                    <h2>I'm <span className="change1">Nithya</span><br /></h2>
                    <h2 className="note">Front-End <span className="change2">Web &nbsp;</span></h2>
                    <div className="btn">
                        <a><button className="bt1">HIRE ME</button></a>
                        <a href={resume} download><button className="bt2" >Download Resume</button></a>
                    </div>
                </div>
                <div className="photo">
                    <img src={image1}></img>
                </div>
            </div>
        )
    }
}
export default home;