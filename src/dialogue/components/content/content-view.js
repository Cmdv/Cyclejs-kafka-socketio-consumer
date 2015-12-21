import {h, div, h1, h2, button, p} from '@cycle/dom'

const view = (state$) =>
  state$.map(Tile => {
    return div([
      h1('.content-subhead', ['Home Page']),
      h1([`Live Sky homepage tile clicks`]),
      div([Tile])
    ])
  });

export default view
