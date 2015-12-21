// Barchart has no intent yet this is placeholder for old menu system
const intent = ({DOM}) => ({
  click$: events(
    DOM.select('.link'), [
      `click`,
      `touchstart`,
    ])
    .filter(filterLinks),
});

export default intent;
