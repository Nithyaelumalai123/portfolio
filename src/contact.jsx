// import React from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
// import React, { useRef } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import emailjs from '@emailjs/browser';
// import sendEmail from '@emailjs/browser';
// import form from '@emailjs/browser';
// function contact() {
//     const Contact = () => {
//         const form = useRef();
//         const sendEmail = (e) =>{
         
//             e.preventDefault();
    
//             emailjs.sendForm('service_sxirxj8', 'template_t9p6t5l', form.current, 'Y0455fBPoZUwgNND3')
//                 .then((result) => {
//                     console.log(result.text);
//                     console.log("message sent!")
//                 }, (error) => {
//                     console.log(error.text);
//                     console.log("error sending message, try again!");
//                 });
//             };
//     }
const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_sxirxj8', 'template_t9p6t5l', form.current, {
          publicKey: 'Y0455fBPoZUwgNND3',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div className='contactover' id='contact'>
            <div className='topic'>
                <h1 className='skill1'> Contact</h1>
                <h1 className='skill2'>My contact</h1>
            </div>
            <div className='contact'>


                <div className='rightdiv'>
                    <h1 className='contact1'>Contact Us</h1>
                    <div className='contact_overall'>

                        <div className='iconscont'>
                            <h1 className='ic1'><FaLocationDot /></h1>
                            <h1 className='ic2'><IoMdMail /></h1>
                            <h1 className='ic3'><FaPhone /></h1>
                        </div>
                        <div className='address'>
                            <h5>Velachery,chennai</h5>
                            <h5 className='mail1'><span>nithyaelumalai</span><span>2003@gmail.com</span></h5>
                            <h5>9345667213</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='whitediv'>
                {/* <div className='leftdiv' > */}
            <form className="leftdiv"  ref={form} onSubmit={sendEmail}>
            
                <h1>Get in Touch</h1>
                <p>Feel Free to drop us a line below!</p>
               
                    <input placeholder='Your Name' name="user_name" required/>
                    <input placeholder='Your Email' name="user_mail" required/> 
                    <textarea placeholder='Typing Your message Here...' name="message" required type='text' rows={5} cols={32}></textarea>
                    <button className='contbtn' type='sumbit' value="Send">SEND</button>
              
                    </form>
            </div>
            </div>
    //    </div>


    )
}


export default ContactUs;