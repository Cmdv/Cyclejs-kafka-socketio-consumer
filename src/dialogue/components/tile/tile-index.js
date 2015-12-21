import intent           from './tile-intent'
import model            from './tile-model'
import view             from './tile-view'

const tile = (sources) => {
  // clickStream from socket.io driver
  const incomingMessages$ = sources.socketIO.get('newClickStream');
  const tiles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  const state$ = model(tiles, {incomingMessages$});
  const view$ = view(state$);

  return {
    DOM: view$
  }
};

export default tile;
