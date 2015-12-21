import Rx       from 'rx'
import navbar   from './dialogue/components/barchart/barchart-index'
import content  from './dialogue/components/content/content-index'
import {div}    from '@cycle/dom'

const view = (navbar, content) => {
    return div('#layout .pure-g',[
        div('.sidebar .pure-u-1 .pure-u-md-1-4', div('.header',[navbar])),
        div('.content .pure-u-1 .pure-u-md-3-4', [content])
    ])
};

const main = sources => {
    const Content = content(sources);
    const Nav = navbar(sources);

    const view$ = Rx.Observable.just(
        view(
            Nav.DOM,
            Content.DOM
        )
    );

    return {
        DOM: view$,
    }
};

export default main
