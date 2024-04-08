import React from 'react';
import './skill.css';
import { FaPaintBrush, FaCode } from "react-icons/fa";
import { FaTabletButton } from "react-icons/fa6";
class Skill extends React.Component {
    render() {
        return (
            <div className="container" id="skill">
                <div className='topic'>
                    <h1 className='skill1'> Skills</h1>
                    <h1 className='skill2'>My Skills</h1>
                </div>
                <div className='overall'>
                    <div className='right'>
                        <div className='over1'>
                            <h1 className='icon1'><FaPaintBrush /></h1>
                            <div className='one'>
                                <h1 className='design1'>Design + Development </h1>
                                <p>Clean, modern designs optimized for performance,search  engines, and connecting user to customers.</p>
                            </div>
                        </div>
                        <div className='over2'>
                            <h1 className='icon2'><FaCode /></h1>
                            <div className='two'>
                                <h1 className='design2'>Technology</h1>
                                <p>Combined all the Latest technologies to progressive website. </p>
                            </div>
                        </div>
                        <div className='over3'>
                            <h1 className='icon3'><FaTabletButton /></h1>
                            <div className='three'>
                                <h1 className='design3'>Always Responsive</h1>
                                <p> A responsive design makes your website accessible to all letters regardness of their device. </p>
                            </div>
                        </div>
                    </div>

                    <div className='prog'>
                        <div className="Skills_content">
                            <div className="progres">
                                <div className="progresbar_details">
                                    <h1 className='head1'> HTML5</h1>
                                    <h1>95%</h1>
                                </div>
                                <div className="progresbar">
                                    <div className="bar bar1">
                                    </div>

                                </div>
                            </div>

                            <div className="progres1">
                                <div className="progresbar1_details">
                                    <h1 className='head2'> CSS</h1>
                                    <h1>90%</h1>
                                </div>
                                <div className="progresbar1">
                                    <div className="bar bar1">
                                    </div>
                                </div>
                            </div>
                            <div className="progres2">
                                <div className="progresbar2_details">
                                    <h1 className='head3'> JAVASCRIPT</h1>
                                    <h1>80%</h1>
                                </div>
                                <div className="progresbar2">
                                    <div className="bar bar2">
                                    </div>
                                </div>
                            </div>
                            <div className="progres3">
                                <div className="progresbar3_details">
                                    <h1 className='head4'> REACT</h1>
                                    <h1>85%</h1>
                                </div>
                                <div className="progresbar3">
                                    <div className="bar bar3">
                                    </div>

                                </div>
                            </div>
                            <div className="progres4">
                                <div className="progresbar4_details">
                                    <h1 className='head5'> BOOTSTRAP</h1>
                                    <h1>95%</h1>
                                </div>
                                <div className="progresbar4">
                                    <div className="bar bar4">
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </div>



        )


    }
}
export default Skill;