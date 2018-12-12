import React from "react";
import { Link } from "react-router";
import axios from "axios";
import Auth from "../auth.js";
import SaySomething from "./SaySomething.js"

var AllCaseloads = React.createClass({
    render: function() {
    	return (
        <div className="AllCaseloads">
            <h2>WELCOME TO ALL MESSAGES </h2>
            
	            <div className="messages">
	            	{this.state.messages.map(this.renderMessage)}
				</div>
        
        </div>
    );
},

getInitialState: function() {
		return { messages: [] };

},

componentDidMount: function() {
	axios
		.post("/allPosts", {
			login: Auth.userName(),
			password: Auth.password()

		})
		.then(response => {
			console.log(response);
			this.setState({messages: response.data.rows});
		});
},

// {"message_id":3,"message":"pow!","threat_category":"immenent","school":"Sumner High School","post_time":"2018-06-08 21:54:32"}
// messageObj.message, messageObj.thread_category, messageObk.school, messageObj.post_time
renderMessage: function(messageObj, index) {
	return (
		<div className="message">
		<p> {messageObj.school}</p>
		<p> {messageObj.threat_category}</p>
		<p> {messageObj.message}</p>
		<p> {messageObj.post_time}</p>
		<button onClick={() => this.handleSubmit(messageObj.message_id)}>Add to Caseload</button>
		</div>


		)

	// return <Message key={index} MessageInfo={messageObj} />;
	},


	handleSubmit: function(message_id) {
		alert("Adding to caseload:" + message_id);
		var postData = {
			login: Auth.userName(),
			password: Auth.password(),
			message_id: message_id
		};

		axios
			.post('/addToMyCaseload', postData)
			.then(response => {
				hashHistory.push( '/'); 
			});
	}
});

export default AllCaseloads


// {JSON.stringify(messageObj)}