
import React from 'react';
import "./about.css";
import image2 from "./img2.jpg"
class about extends React.Component {
    render() {
        return (
        
            <div className='overallcontent' id="about">
                <div className='topic'>
                    <h1 className='skill1'> About</h1>
                    <h1 className='skill2'>About</h1>
                </div>
                <div className='twocontent'>
                    <div className='photos'>
                        <img src={image2}></img>
                    </div>
                     <div className='over'>
                       
                        <div className='content'>
                            <h1 className='ttl'> Web Developer</h1>
                            <p className='para'>I am a Web Developer with a strong focus on web branding. Web design seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.</p>
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td>:</td>
                                    <td>Nithya</td>
                                </tr>
                                <tr>
                                    <td>Birthday</td>
                                    <td>:</td>
                                    <td>19-02-2003</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td className='mail'><span>nithyaelumalai</span><span>2003@gmail.com</span></td>
                                </tr>
                                <tr>
                                    <td>Language</td>
                                    <td>:</td>
                                    <td>Tamil,English</td>

                                </tr>
                                <tr>
                                    <td>Freelance</td>
                                    <td>:</td>
                                    <td>Available</td>
                                </tr>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
            
        )
    }
}
export default about;