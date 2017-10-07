//var mongoose = require('mongoose');

var {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLList
} = require('graphql');

var {
	stackExchangeQueryType
} = require('./stackExchangeSchema');

var {
	mediaWikiQueryType
} = require('./mediaWikiSchema');

var {
	instagramQueryType
} = require('./instagramSchema');

var {
	pinterestQueryType
} = require('./pinterestSchema');

const twitterQueryType = require('./twitterSchema');
const fbQueryType = require('./fbSchema');
const flickrQueryType = require('./flickrSchema');
const spotifyQueryType = require('./spotifySchema');
const youtubeQueryType = require('./youtubeSchema');
const redditQueryType = require('./redditSchema');
const weiboQueryType = require('./weiboSchema');
const tumblrQueryType = require('./tumblrSchema');

function wrapper(){
	return {}
}

//connect to the mongodb database
//mongoose.connect('mongodb://localhost/graphql');

//check connection successful or not
/*var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', function() {
  console.log("successfully connect to mongodb");
});

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);
// var silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
// var fluffy = new Kitten({ name: 'fluffy' });
// fluffy.save(function (err) {
//   if (err) return console.error(err);
//   console.log("successfully store");
// });

// silence .save(function (err) {
//   if (err) return console.error(err);
//   console.log("successfully store");
// });

var promiseListAll = () => {
  return new Promise((resolve, reject) => {
    Kitten.find((err, kittens) => {
      if (err) reject(err)
      else resolve(kittens)
    })
  })
}

const testQueryType = new GraphQLObjectType({
	name:'testQuery',
	description: 'a test to fetch query from mongodb database',
	fields: () => ({
		name: {
			type: GraphQLString,
		}
	})
})*/

const Query = new GraphQLObjectType({
	name: "Query",
	description: 'all api query type',
	fields: () => ({
		stackExchange: {
			type: stackExchangeQueryType,
			resolve:() => wrapper()
		},
		mediaWiki: {
			type: mediaWikiQueryType,
			resolve:() => wrapper()
		},
		instagram: {
			type: instagramQueryType,
			resolve:() => wrapper()
		},
		pinterest: {
			type: pinterestQueryType,
			resolve:() => wrapper()
		},
		/*dbTest: {
			type: new GraphQLList(testQueryType),
			resolve:() => promiseListAll()
		},*/
		twitter:{
			type:twitterQueryType,
			resolve: () => wrapper()
			},
		facebook:{
			type:fbQueryType,
			resolve: () => wrapper()
			},
		flickr:{
			type: flickrQueryType,
			resolve:() => wrapper()
			},
		spotify:{
			type: spotifyQueryType,
			resolve:() => wrapper()
		},
		youtube:{
			type: youtubeQueryType,
			resolve:() => wrapper()
		},
		reddit:{
			type: redditQueryType,
			resolve:() => wrapper()
		},
		weibo:{
			type: weiboQueryType,
			resolve:() => wrapper()
		},
		tumblr:{
			type:tumblrQueryType,
			resolve:() => wrapper()
		},
	})
})

module.exports = new GraphQLSchema({
	query:Query
})
