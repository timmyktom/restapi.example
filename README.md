# restapi.example
A simple RESTApi example with nodejs, tingodb(embedded db)

## Global Dependencies

| Dependency | Version | Install                               |
| ---------- | ------- | ------------------------------------- |
| NodeJS     | 5.x.x   | [http://node.org](http://nodejs.org/) |
| npm        | 3.x.x   | [http://node.org](http://nodejs.org/) |

## Install
```
$ npm install
```

### Using [tingodb (embedded db)](https://github.com/sergeyksv/tingodb/blob/master/test/crud-test.js) instead of mongodb.
```
$ npm install tingodb
```

### Used [Express Framework](http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)
#### usages
- Allows to set up middlewares to respond to HTTP Requests.
- Defines a routing table which is used to perform different action based on HTTP Method and URL.
```
$ npm install express
```

### Used body-parser 
#### usages
- This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.
```
$ npm install body-parser
```

### Used [flow](https://www.npmjs.com/package/node.flow) for Synchronization between collections joining purpose
```
$ npm install flow
```

## Recommended Workflow
- Download server.js, category.js, product.js files to a folder
- Go to that folder in command prompt
- Do the installations mentioned above
- Start using the api calls like [http://localhost:8085/api/listCategories] or [http://127.0.0.1:8085/api/listCategories] as the services are listening to port no [8085]

## License
MIT
