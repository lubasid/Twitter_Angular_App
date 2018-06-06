
"use strict";

let express = require("express"),
	bodyParser = require("body-parser"),
	Twitter = require('twitter'),
	app = express();

const cors = require('cors')

var corsOptions = {
	origin: 'http://localhost:4200',
	optionsSuccessStatus: 200 
}

const client = new Twitter({
	consumer_key: '5taMIyh6Uv8b4zDpEGd4boHsd',
	consumer_secret: 'aJokLKPgchUsZijuGIXpgKpVj7vr9sF9D1MV0ITzazgBiiJgDr',
	access_token_key: '860294417604915200-JUlX6x5F8v7s3rCDNaqOdEhBP5Wi7Zu',
	access_token_secret: 'jl1tVQl1E8QNupgynBBooGOZX8EHNctlTss5koqWFPm1q'
  });

app.use(cors(corsOptions))
app.use(bodyParser.json()); // for parsing application/json


app.get('/api/twitter', (req, res) => {
  //console.log('received request', req.query.q);
	let twitterData = [];

  client.get('search/tweets', { q: `#${req.query.q}`}, function(error, tweets, response) {
		if (!error){
			tweets.statuses.forEach(function(text){
		
				let hashtag_list = [];
				let tag_array = (text.entities.hashtags);

				tag_array.forEach(item => { 
					hashtag_list.push(item.text);

				});

				var newItem = {username: text.user.screen_name, text: text.text,  location: text.user.location,
					 tags: hashtag_list, timezone: text.user.time_zone, profile_pic: text.user.profile_image_url };
			
				twitterData.push(newItem);
	
			});

			res.send(twitterData);
	
		}
		else (console.log(error));
		// console.log(twitterData) 	
	});

});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

