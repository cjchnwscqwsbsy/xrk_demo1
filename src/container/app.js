import React from 'react';
import { observer } from 'mobx-react';
import './app.less';

@observer
export default  class App extends React.Component {
    render() {
        return (
            <div className={`app-container`}>
                <button onClick={this.onReset.bind(this)}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <div className={`app-container-page`}>
                    page
                    <div className={`app-container-page-child`}>child page</div>
                </div>
            </div>
        );
    }

    onReset() {
        this.props.appState.resetTimer();
    }
}