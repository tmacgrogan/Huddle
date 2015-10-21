v1.1
run mongod.exe to start the database server
execute "node serve.js" to run the api server
navigate to http://localhost:8080 in your browser
POST http://localhost:8080/create will create a huddle
GET http://localhost:8080/huddles will return all huddles stored in the database
GET http://localhost:8080/huddles/:id will get the huddle specified by :id

use the Postman Chrome extension or something similar to build post requests in your browser.
	see sampleHuddle.json for correct json format

