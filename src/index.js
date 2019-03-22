import ReactDom from 'react-dom';
import './style.less';

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello World';

    return element;
}
ReactDom.render(component(),document.getElementById('app'));

