import React, { useEffect } from 'react';
import './nav.css';
// import { FaBars } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
class navbar extends React.Component {

    render() {

        setTimeout(() => {
            var header = document.querySelector(".nav-links");
            var tag = header.getElementsByClassName("links");
            for (var i = 0; i < tag.length; i++) {
                tag[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active");
                    current[0].className = current[0].className.replace("active", "");
                    this.className += " active";
                });
            }
        }, 3000);

        return (
            <>
                <main className='overall-container'>
                    <header className='nav-container'>
                        <h1 id='logo'>Nithya</h1>
                        <input type='checkbox' id="menu" />
                        <label for="menu"><i className='icon1'><FaBars /></i><i className='icon2'><RxCross2 /></i></label>
                        <nav className='nav-links'>
                            <a className="links active" href='#home'>Home</a>
                            <a className="links" href='#about'>About</a>
                            <a className="links" href='#skill'>Skill</a>
                            <a className="links" href='#project'>Project</a>
                            <a className="links" href='#contact'>Contact</a>
                        </nav>
                    </header>
                </main>
            </>
        )
    }
}
export default navbar;