# Kafka Cycle Consumer

This is an example consumer for Kafka using CycleJS + Kafka + Socket.IO

\* *you will need kafka setup which this does not provide, check ./configs/kafka-configs.js*

\* *missing tests*

## Installation

```javascript
npm install //install dependencies
```


## Usage

```javascript
npm run kafka //starts kafka consumer and emits to front end via socket.io you should see an output
```

New terminal tab:

```javascript
npm start //start webpack-dev-server with cycle + hot reload
```


## Tests

```javascript 
npm test //start testem + tape
```


## Prod builds

```javascript 
npm run build //builds both frontend & backend into build folder
```

## Dependencies

[Cyclejs](http://cycle.js.org/) - View for our app

[Socket.io](http://socket.io/) - Web sockets

[kafka-node](https://www.npmjs.com/package/kafka-node) - Communication with kafka

[tape](https://github.com/substack/tape) - tap-producing test harness for node and browsers

[testem](https://github.com/airportyh/testem) - test runner

[webpack](https://github.com/airportyh/testem) - a bundler for JavaScript

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) - updates browsers on changes

[babel](https://github.com/babel/babel) - compiler for converting ES6
