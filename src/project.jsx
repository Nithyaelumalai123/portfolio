import React from 'react';
import './project.css';
import pic1 from './proj1.jpg';
import pic2 from './proj2.jpg';
import pic3 from './petshop1.jpg';
import pic4 from './portfolio.jpg';

class project extends React.Component {
    render() {
        return (

            <div className='projectover' id='project'>
                <div className='namediv'>
                    <h1 className="nam1"> Projects</h1>
                    <h1 className='nam2'>Projects</h1>
                </div>
                <div className='box'>
                    <div className='box1'>
                        <img src={pic1} className='pic1'></img>
                        <button className='btn1'>Hover Me</button>
                        <div className='div1'>
                            <h1>Tourist Website</h1>
                            <a href="https://nithyaelumalai123.github.io/touristWeb/"><button className='inbtn1'>Visit Site</button></a>
                        </div>
                    </div>
                    <div className='box2'>
                        <img src={pic2} className='pic2'></img>
                        <button className='btn2'>Hover Me</button>
                        <div className='div2'>
                            <h1>Nestasia Website</h1>
                            <a href="https://kamali42.github.io/Group-projects/"><button className='inbtn2'>Visit Site</button></a>
                        </div>
                    </div>
                    <div className='box3'>
                        <img src={pic3} className='pic3'></img>
                        <button className='btn3'>Hover Me</button>
                        <div className='div3'>
                            <h1>Petstore Website</h1>
                            <a href="https://prakashraj2404.github.io/Petstore-Project/"><button className='inbtn3'>Visit Site</button></a>
                        </div>
                    </div>
                    <div className='box4'>
                        <img src={pic4} className='pic4'></img>
                        <button className='btn4'>Hover Me</button>
                        <div className='div4'>
                            <h1>Portfolio Website</h1>
                            <a href="https://nithya-portfolio-project.netlify.app"><button className='inbtn4'>Visit Site</button></a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
export default project;