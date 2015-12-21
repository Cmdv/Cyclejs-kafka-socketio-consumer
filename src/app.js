import Cycle                from '@cycle/core';
import {makeDOMDriver}      from '@cycle/dom';
import {makeHistoryDriver}  from '@cycle/history';
import Main                 from './main'
import SocketIO       from './drivers/socketIO-driver'

// pulling in css files here for webpack to compile
require("!style!css!styles/pure-min.css");
require("!style!css!styles/layout.css");
require("!style!css!styles/grids-responsive-min.css");

// creating our mainApp from /.main
function mainApp(sources) {
  let requests = Main(sources);
  return requests
}

const socketIODriver = SocketIO.createSocketIODriver(window.location.hostname + ':3001');
// this is the Cycle run. first argument is our mainApp then an object:
// makeDOMDriver has the ID or class we want the cycle to render into on page
const driver = {
  DOM: makeDOMDriver('#application'),
  socketIO: socketIODriver,
};

Cycle.run(mainApp,driver);
