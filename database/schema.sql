PRAGMA foreign_keys = ON; 
.mode column
.headers on
.read schools.sql


CREATE TABLE User (
	login TEXT PRIMARY KEY,
	password TEXT NOT NULL,
	email TEXT NOT NULL,
	school TEXT NOT NULL 
	);

INSERT INTO User VALUES
	('bugs', 'bunny', "bugs@email.com", 'Puyallup High'),
	('daffy', 'duck', "daffy@email.com", 'Rogers High'),
	('elmer', 'fudd', "elmer@email.com", 'Sumner High');




CREATE TABLE Message (
	message_id INTEGER PRIMARY KEY,
	message TEXT,
	threat_category TEXT, 
	school TEXT NOT NULL,
	post_time TEXT DEFAULT CURRENT_TIMESTAMP
	); 

CREATE TABLE Caseload (
	case_id INTEGER PRIMARY KEY,
	user TEXT REFERENCES User(login), 
	post_id INTEGER REFERENCES Message(message_id)
	); 

CREATE TABLE CaseAction (
	case_id INTEGER REFERENCES Caseload(case_id),
	action_taken TEXT, 
	post_time TEXT DEFAULT CURRENT_TIMESTAMP
	); 



.save schema.sqlt

