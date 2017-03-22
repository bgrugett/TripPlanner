const app = require('express')();
const bodyParser = require('body-parser');

// my own logging middleware instead of using morgan or volleyball
app.use(function (req, res, next) {
	console.log('Request:', req.method, req.url);
	next();
});

app.get('/', function (req, res, next) {
	res.sendFile(__dirname + '/index.html', next);
});

app.use(bodyParser.json());

const babyNames = [{
	name: 'kid',
	type: 'goat'
}, {
	name: 'calf',
	type: 'hippo'
}, {
	name: 'foal',
	type: 'horse'
}, {
	name: 'joey',
	type: 'kangaroo'
}];

app.get('/babes', function (req, res, next) {
	res.json(babyNames);
});

app.post('/babes', function (req, res, next) {
	babyNames.push(req.body);
	res.status(201).json(babyNames);
});

// not used here but to remind you that you should indeed use it! And for a lovely talking point during the lecture :)
app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal Error');
});

var port = 3000;
app.listen(port, function () {
	console.log('Frantically listening on port', port);
});