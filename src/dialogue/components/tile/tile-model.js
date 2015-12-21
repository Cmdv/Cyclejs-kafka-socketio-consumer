import {h, div, h1,} from '@cycle/dom'
import {Observable}  from 'rx'

// the model for our tile combines the divs [] with kafka stream
const model = (tiles, actions) =>
  Observable.combineLatest(
    // first half of combinelatest mapping over the tiles
    tiles.map((t) => {
      // for each tile check if incoming kafka stream matches
      return actions.incomingMessages$
        .filter((click) => {
          return click.tileNum === t
        })
        // make sure to populate divs before incomingMessages$ stream arrives
        .startWith({
          tileNum: t,
          count: 0
        })
        // accumulate count to div from stream
        .scan(({tileNum, count}, {tileName}) => ({
          tileNum,
          tileName,
          count: count + 1,
        }))
      }
    ),
    // second half of combinelatest sorting the tiles by clickCount or if the same tileNum
    (...tiles) =>
      tiles.sort(
        ({count: a, tileNum: an}, {count: b, tileNum: bn}) =>
        b - a || an - bn
      )
  );

export default model;
