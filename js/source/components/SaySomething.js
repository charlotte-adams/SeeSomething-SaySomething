import React from "react";
import { Link } from "react-router";
import axios from "axios";
import { hashHistory } from "react-router"

var SaySomething = React.createClass({
	render: function() {
		return (
			<div className="SaySomething">
				<h2>REPORT what you have seen here...</h2>
				<br />
				<form onSubmit={this.handleSubmit}>

					<div>
						WHO are you reporting? <br />
						<label />

						<label>
							<input type="radio" name="status" />
							Current Student
						</label>
						<label>
							<input type="radio" name="status" />
							Alumni
						</label>
						<label>
							<input type="radio" name="status" />
							Staff
						</label>
						<label>
							<input type="radio" name="status" />
							Other
							<br />
							<br />
						</label>

						<label>First name</label>
						<input type="text" placeholder="Enter the first name" />
						<br />

						<label>Last name</label>
						<input type="text" placeholder="Enter the last name" />
						<br />
						<br />
					</div>

					<label>Which SCHOOL are they associated with?</label>
					<br />
					<select>
						<option>Puyallup High School</option>
						<option>Sumner High School</option>
						<option>Rogers High School</option>
						<option>Enumclaw High School</option>
						<option>Orting High SCHOOL</option>
						<option>Stadium High School</option>
						<option>Federal Way High School</option>
						<option>Highline High School</option>
					</select>
					<br />
					<br />

					<label>Which SCHOOL is being THREATENED?</label>
					<br />
					<select name = "school">
						<option>Puyallup High School</option>
						<option>Sumner High School</option>
						<option>Rogers High School</option>
						<option>Enumclaw High School</option>
						<option>Orting High SCHOOL</option>
						<option>Stadium High School</option>
						<option>Federal Way High School</option>
						<option>Highline High School</option>
					</select>
					<br />
					<br />

					Perceived THREAT LEVEL?
							<br />
							<select name = "threat_category">
						<option>low</option>
						<option>med</option>
						<option>high</option>
						<option>immenent</option>
					
					</select>
							

					<div>
						Are more people involved?
						<input type="checkbox" /> no <br />
						<input type="checkbox" /> yes <br />

						WHO?

						<label>
							<input type="radio" name="status" />
							Current Student
						</label>
						<label>
							<input type="radio" name="status" />
							Alumni
						</label>
						<label>
							<input type="radio" name="status" />
							Staff
						</label>
						<label>
							<input type="radio" name="status" />
							Other
							<br />
							<br />
						</label>

						<label>First name</label>
						<input type="text" placeholder="Enter the first name" />
						<br />

						<label>Last name</label>
						<input type="text" placeholder="Enter the last name" />
						<br />
						<br />

						WHO?
						<label>
							<input type="radio" name="status" />
							Current Student
						</label>
						<label>
							<input type="radio" name="status" />
							Alumni
						</label>
						<label>
							<input type="radio" name="status" />
							Staff
						</label>
						<label>
							<input type="radio" name="status" />
							Other
							<br />
							<br />
						</label>

						<label>Which SCHOOL are they associated with?</label>
						<br />
						<select>
							<option>Puyallup High School</option>
							<option>Sumner High School</option>
							<option>Rogers High School</option>
							<option>Enumclaw High School</option>
							<option>Orting High SCHOOL</option>
							<option>Stadium High School</option>
							<option>Federal Way High School</option>
							<option>Highline High School</option>
						</select>
						<br />
						<br />

						<label>First name</label>
						<input type="text" placeholder="Enter the first name" />
						<br />

						<label>Last name</label>
						<input type="text" placeholder="Enter the last name" />
						<br />
						<br />
					</div>

					<label>Which SCHOOL are they associated with?</label>
					<br />
					<select>
						<option>Puyallup High School</option>
						<option>Sumner High School</option>
						<option>Rogers High School</option>
						<option>Enumclaw High School</option>
						<option>Orting High SCHOOL</option>
						<option>Stadium High School</option>
						<option>Federal Way High School</option>
						<option>Highline High School</option>
					</select>
					<br />
					<br />
					

					<div className="textarea">
						<textarea name="message" rows="10" cols="40">
							Make your detailed report here...
						</textarea>
						<br />
						<br />


					<input type="submit" value="Submit Report" />
					
				</div>
				</form>

			</div>
		);

	},

	handleSubmit: function(event) {
		event.preventDefault();

		var postData = {
			school: event.target.school.value,
			message: event.target.message.value,
			threat_category: event.target.threat_category.value
		};

		axios
			.post('/addMessage', postData)
			.then(response => {
				hashHistory.push( '/'); 
			});
	}
});

export default SaySomething;
