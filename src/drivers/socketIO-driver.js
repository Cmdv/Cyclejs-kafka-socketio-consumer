import Rx from 'rx';
import io from 'socket.io-client';

function createSocketIODriver(url) {
  const socket = io(url);

  function get(eventName) {
    return Rx.Observable.create(observer => {
      const sub = socket.on(eventName, function (message) {
        console.log(message);
        observer.onNext(message);
      });
      return function dispose() {
        observer.dispose();
      };
    }).publish().refCount();
  }

  function publish(messageType, message) {
    socket.emit(messageType, message);
  }

  return function socketIODriver(events$) {
    events$.forEach(event => publish(event.messageType, event.message));
    return {
      get,
      dispose: socket.destroy.bind(socket)
    }
  };
}

export default {createSocketIODriver};
