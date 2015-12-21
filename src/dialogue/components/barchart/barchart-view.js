import {h, div, h1, h2} from '@cycle/dom'

const view = () => {
  return div([
    h1('.brand-title', [`SKY`]),
    h2('.brand-tagline', [`believe in butter`]),
  ])
};

export default view;
