import view   from './content-view'
import tile from '../tile/tile-index'

// returning our DOM
const Home = (sources) => {

  const Tile = tile(sources);
  const view$ = Rx.Observable.just(
    view(
      Tile.DOM
    )
  );

  return {
    DOM: view$,
  }
};

export default Home
