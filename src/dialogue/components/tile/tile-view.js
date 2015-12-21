import {h, div, h1, p,} from '@cycle/dom'

const view = (state$) =>
  state$.map((tiles) => div(
    div(
      tiles.map((t) =>
        div('.pure-u-1-3', [
          div('.tile ', {
            key: t.tileNum,
            attributes: {'data-tile-num': t.tileNum}
          }, [
            h1([t.tileNum]),
            p([t.tileName]),
            p(['click count: ' + t.count])
          ])
        ])
      )
    )
  ));

export default view;
