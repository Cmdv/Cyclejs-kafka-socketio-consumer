import config from '../configs/kafka-config';
import Rx from 'rx';
import {HighLevelConsumer, Client, Offset} from 'kafka-node';
import {listen} from 'socket.io';


const offset = new Offset(new Client());

let latestOffset = 0;

offset.fetch([
  {topic: config.topic, partition: 0, maxNum: -1},
], function (err, offsets) {
  latestOffset = offsets[0];
});

// configure the kafka client
const client = new Client(config.server, 'consumer' + process.pid);
const topics = [{topic: config.topic, offset: latestOffset}]

// create kafka consumer stream
const consumer = new HighLevelConsumer(client, topics, config.options);

// turn consumer into a stream
const messageStream = Rx.Observable.fromEvent(consumer, 'message');

const valueStream = messageStream
  .map((message) => JSON.parse(message['value']));

// manipulate he kafka stream to output what is needed
const kafkaStream = valueStream
  .filter((value) => value.payload.eventInfo.eventAction === 'tileClicked' && value.payload.attributes.tileList)
  .map((filteredValue) => {
    const title = filteredValue.payload.attributes.tileList;
    const bit = title.split(':');
    return {
      tileNum: parseInt(bit[0]),
      tileName: bit[2],
      clickCount: 1
    }
  });
// open a websocket
const socketIO = listen(3001);

// need to change pushing to external object
const sockets = [];
socketIO.on('connection', (socket) => sockets.push(socket));
const broadcast = (eventName, data) => {
  return sockets.forEach((socket) => socket.emit(eventName, data))
};

// subscribe to the stream and pass it to socket.io
kafkaStream.subscribe(
  (kafkaStream) => {
    console.log(kafkaStream); // to see something happening in the console
    return broadcast('newClickStream', kafkaStream);
  },
  (error) => console.log(error)
);
