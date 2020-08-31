import React from 'react';
import "../css/Contact.css"
import email from "../pictures/email.png"
import linkedin from "../pictures/linkedin.png"
import github from "../pictures/github.png"


export default function ContactPage(props) {

    return (
        <div class="background" >
            <div class="column">
                <p class="thanks">Thanks for dropping by!</p>
                <div style={{marginTop: "20px"}}>
                    <p class="contact">You can contact me with the following methods</p>
                </div>
                <div style={{marginTop: "80px", width: '60%', display: 'flex', justifyContent: "space-between"}}>
                    <div class="column">
                        <img src={email} width="80px" height="80px"></img>
                        <a class="contact_text" href="mailto:nazargy@gmail.com?subject=Connect with me">Email</a>
                    </div>
                    <div class="column">
                        <img src={linkedin} width="80px" height="80px"></img>
                        <a class="contact_text" href="https://www.linkedin.com/in/nazar-georgis-yap/" target="_blank">LinkedIn</a>
                    </div>
                    <div class="column">
                        <img src={github} width="80px" height="80px"></img>
                        <a class="contact_text" href="https://github.com/NazGy" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </div>)
}
