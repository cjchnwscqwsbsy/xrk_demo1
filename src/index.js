import React from 'react';
import ReactDom from 'react-dom';
import { observable, action } from 'mobx';
import App from './container/app';

const appState = observable({
    timer: 0
});

appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);

ReactDom.render(<App appState={appState}/>, document.getElementById('app'));
