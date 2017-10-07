require('dotenv').config();

var config = {};
  config.twitter = {};
  config.twitter.consumer_key    =  process.env.TWITTER_CONSUMER_KEY;
  config.twitter.consumer_secret =  process.env.TWITTER_CONSUMER_SECRET; 
  config.twitter.access_token_key = process.env.TWITTER_ACCESS_TOKEN_KEY;
  config.twitter.access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
  
  config.fb = {};
  config.fb.app_id = process.env.FACEBOOK_APP_ID;
  config.fb.app_secret = process.env.FACEBOOK_APP_SECRET;
  config.fb.access_token = process.env.FACEBOOK_ACCESS_TOKEN;
  
  config.flickr = {};
  config.flickr.consumer_key = process.env.FLICKR_CONSUMER_KEY;
  config.flickr.consumer_secret = process.env.FLICKR_CONSUMER_SECRET;
  config.flickr.access_token = process.env.FLICKR_ACCESS_TOKEN;
  config.flickr.access_token_secret = process.env.FLICKR_ACESS_TOKEN_SECRET;
  
  config.spotify = {};
  config.spotify.client_id = process.env.SPOTIFY_CLIENT_ID;
  config.spotify.client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  config.spotify.callback = process.env.CALLBACK_URL;
  
  config.youtube = {};
  config.youtube.api_key = process.env.YOUTUBE_API_KEY;
  config.youtube.client_id = process.env.YOUTUBE_CLIENT_ID;
  config.youtube.client_secret = process.env.YOUTUBE_CLIENT_SECRET; 
  config.youtube.access_token = process.env.YOUTUBE_ACCESS_TOKEN;
  config.youtube.refresh_token = process.env.YOUTUBE_REFRESH_TOKEN;
  //config.youtube.code = process.env.YOUTUBE_CODE;
  config.youtube.callback = process.env.CALLBACK_URL;
  
  config.reddit = {};
  config.reddit.client_id = process.env.REDDIT_CLIENT_ID;
  config.reddit.client_secret = process.env.REDDIT_CLIENT_SECRET;
  config.reddit.userAgent = process.env.REDDIT_USERAGENT;
  config.reddit.username = process.env.REDDIT_USERNAME;
  config.reddit.password = process.env.REDDIT_PASSWORD;
  
  config.weibo = {};
  config.weibo.app_key = process.env.WEIBO_APP_KEY;
  config.weibo.app_secret = process.env.WEIBO_APP_SECRET;
  config.weibo.access_token = process.env.WEIBO_ACCESS_TOKEN;
  config.weibo.callback = process.env.WEIBO_CALLBACK_URL;
  
  config.tumblr = {};
  config.tumblr.consumer_key = process.env.TUMBLR_CONSUMER_KEY;
  config.tumblr.comsumer_secret = process.env.TUMBLR_CONSUMER_SECRET;
  config.tumblr.access_token = process.env.TUMBLR_ACCESS_TOKEN;
  config.tumblr.access_token_secret = process.env.ACCESS_TOKEN_SECRET;
  
  config.pinterest = {};
  config.pinterest.access_token_key = process.env.PINTEREST_ACCESS_TOKEN;

  config.instagram = {};
  config.instagram.access_token_key = process.env.INSTAGRAM_ACCESS_TOKEN_KEY;
module.exports = config;
