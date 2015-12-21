import view             from './barchart-view'
import kafkaDataDriver  from '../../../drivers/socketIO-driver'

const barchart = (sources) => {

  const view$ = view();
  return {
    DOM: view$,
  }
};

export default barchart;
