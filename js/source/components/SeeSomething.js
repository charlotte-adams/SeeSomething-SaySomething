import React from "react";
import {Link} from "react-router";
import axios from "axios";



function SeeSomething(props) {
    return (
        <div>
            <h2>WHAT HAVE YOU SEEN?</h2>
            <p>
            	Have you seen or heard someone BULLYING another? 
            </p>
            <p>
            	Have you heard that a peer has PLANS TO SHOOT UP YOUR SCHOOL? 
            </p>
            <p>
            	Have you seen a NEGATIVE change in a peer's SOCIAL MEDIA PLATFORM?
            </p>
            <p>
            	Have you seen/heard that a fellow student has ACCESS TO GUNS? 
            </p>
            <p>
            	Have you noticed a breakup between two classmates and one is DEPRESSED/WITHDRAWN? 
            </p>
            <p>
            	Have you seen/heard that a boyfriend is ABUSING/CONTROLLING his girlfriend? 
            </p>
            <p>
            	Have you heard there is going to be a FIGHT  between two people or groups of people? 
            </p>

             <Link to="/saySomething">[Make Anonymous Report Here]</Link>
        </div>
    );
}















export default SeeSomething