

const express = require('express');
const sqlite3 = require('sqlite3');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const promise = require('db-promise.js');
const multer =require('multer');
const path = require('path');
 
const db = new sqlite3.Database('database/schema.sqlt');

const port = 8585;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static('public'));



morgan.token('postdata', function (req, res) {
	return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :postdata'));

app.listen(port, () => {
	console.log(`Listening on http//localhost:${port}`);
});

// add new users to the database
app.post('/register', checkPasswordReqs, checkUsernameReqs, checkUsernameAvailable,
	(req, res) => {
		var query = `INSERT INTO User (login, password) VALUES (?, ?)`;
			promise
				.run(db, query, req.body.login, req.body.password)
				.then(() => res.json({ ok: true}));
	});




// fetch all the messages in the database
app.post('/allPosts', (req, res) => {
	var query =
		`SELECT * FROM Message 
		 ORDER BY post_time DESC`;

	promise
		.all(db, query)
		.then(rows => res.send({ ok: true, rows: rows }));


});

// submit a new message
app.post ('/addMessage', (req, res) => {
	var query = 
	`INSERT INTO Message (message, threat_category, school)
		VALUES (?, ?, ?)`; 
	promise
		.run(db, query, req.body.message, req.body.threat_category, req.body.school)
		.then (() => res.send ({ ok: true}));
});
//  all routes defined below this point will be intercepted by confirmlogin middleware
app.use(confirmLogin);

// authenticate user's credentials
app.post('/login', (req, res) => {
	res.json({ ok: true });
});




app.post('/MyCaseload', (req, res) => {
	var query = 
	`SELECT * FROM Caseload
	 JOIN Message ON message.message_id = Caseload.post_id
	 
	 WHERE Caseload.user = ?`

	promise
		.all(db, query, req.body.login)
		.then(rows => res.send({ ok: true, rows: rows }));
});


// add specific message to specific caseload
app.post ('/addToMyCaseload', (req, res) => {
	var query = 
	`INSERT INTO Caseload (user, post_id)
		VALUES (?, ?)`; 
	promise
		.run(db, query, req.body.login, req.body.message_id)
		.then (() => res.send ({ ok: true}));
});

// custom middleware
function confirmLogin(req, res, next) {
    promise.all(db, `SELECT * FROM User WHERE login = ?`, req.body.login)
        .then(rows => {
            if (rows.length === 0) {
                res.json({ ok: false, message: "No such user" });
            } else {
                var user = rows[0];
                if (user.password === req.body.password) {
                    next();
                } else {
                    res.json({ ok: false, message: "Incorrect password" });
                }
            }
        });
}

function checkPasswordReqs(req, res, next) {
    var password = req.body.password;

    if (password.length > 10) {
        res.send({
            ok: false,
            message: 'Username and password must be shorter than 10 characters'
        });
        return;
    }

    if (password.length == 0) {
        res.send({
            ok: false,
            message: 'Username and password must not be empty'
        });
        return;
    }

    next();
}

function checkUsernameReqs(req, res, next) {
    var username = req.body.login;

    if (username.length > 10) {
        res.send({
            ok: false,
            message: 'Username and password must be shorter than 10 characters'
        });
        return;
    }


    if (username.length == 0) {
        res.send({
            ok: false,
            message: 'Username and password must not be empty'
        });
        return;
    }

    if (!/^[a-z0-9]+$/.test(username)) {
        res.send({
            ok: false,
            message: 'Username must contain only digits and letters'
        });
        return;
    }

    next();
}

function checkUsernameAvailable(req, res, next) {
    var query = `SELECT * FROM User WHERE login = ?`;
    promise
        .all(db, query, req.body.login)
        .then(rows => {
            if (rows.length === 0) {
                next();
            } else {
                res.send({ ok: false, message: "That username is already taken." });
            }
        }
    );
}