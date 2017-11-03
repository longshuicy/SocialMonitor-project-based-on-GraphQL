# SocialMonitor project based on GraphQL

## Prerequisite
- [x] Install NodeJS : https://nodejs.org/en/
- [x] In the command line tool, ```cd``` into this project folder and type ```npm install``` to install all the dependency library
- [x] place ```.env``` file (which contains all the social media credentials and access tokens) in the root of this app's directory

## Run
- type ```npm test``` to invoke the debugging mode. In this model, any changes in the source code will be reflected immediately upon save
- ```npm start``` to invoke the production mode.

## Ports
- app lives on http://localhost:8080/graphql
- In the browser, access GraphiQL interface by put http://localhost:8080/graphql in the URL
- serve over the http please refer to: http://graphql.org/learn/serving-over-http/

## Interface preview
![gif](interface.gif)

## Query Examples
```{
  twitter{
    
    queryUser(q:"trump",count:20,pageNum:1) {
      id
      screen_name
      description
    }
    
    queryTweet(q:"trump",count:100,pages:1){
        id
        text
        created_at
        retweet_count
        user{
          id
          screen_name
          description
        }
      }
}```

## Readings
