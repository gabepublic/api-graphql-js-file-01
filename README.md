# api-graphql-js-file-01

Simple API implemented using GraphQL and Apollo server, and file datastore.

## Prerequisite

- [Node.js & NPM](https://heynode.com/tutorial/install-nodejs-locally-nvm/) 

## Setup

This repo has been setup with the following steps,so don't repeat.

- Create a node.js project; `package.json` file will be created
```
$ cd ~/projects/api-graphql-js-file-01
$ npm init

# follow the screen instructions
[...]
```

- Install depedency modules
```
$ cd ~/projects/api-graphql-js-file-01
$ npm install apollo-server graphql lodash
```
  - Lodash makes JavaScript easier by taking the hassle out of working with 
    arrays, numbers, objects, strings, etc.

- Install depedency modules for development only
  - nodemon is automatically restarting the node application when file changes
    in the directory are detected
```
$ npm install --save-dev nodemon
```
  - add starting script in the `package.json`
```
  "start": "nodemon index.js"
```  

## Develop
  
- Create test data: `countries.js` and `users.js`; in the form of javascript
  array; and use `lodash` module to process them in `resolver.sj`; see below.

- Create the `index.js`

- Create a folder `schemas` and add two files: `type-defs.js` and `resolvers.js`;
  they contain code for the API types definition and how to resolve the types
  (i.e., file datastore, database, etc), respectively.

- Run the API server
```
$ npm start

> api-graphql-js-file-01@0.1.0 start
> nodemon index.js

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
API server is running at: http://localhost:4000/ :)
```

- Open browser points to http://localhost:4000/

## Test

- Check countries & users:
```
query ExampleQuery {
  countries {
    code
  }
  users {
    id
  }
}
```

- Get a country `NL`:
```
query ExampleQuery {
  country(code: "NL") {
    name
    native
    phone
    capital
    currency
    emoji
  }
}
```

- Get a user `ID=1`:
```
query ExampleQuery {
  user(id: 2) {
    name
    username
    age
  }
}
```

- Alternative, use `curl`; encountered issue on the windows command:
```
curl 'http://localhost:4000/' -X POST \
     -H 'content-type: application/json' \
     --data '{"query":"query { user(id: 2) { name\n username\n age\n } }"}'
```
  

## References

- [Learn GraphQL in 4 Hours - From Beginner to Expert](https://www.youtube.com/watch?v=yqWzCV0kU_c&t=3056s)
  - [Github Repo](https://github.com/machadop1407/graphql-full-course)
- [Github - Countries GraphQL API](https://github.com/trevorblades/countries)
- [Countries, Languages & Continents data](https://annexare.github.io/Countries/)

