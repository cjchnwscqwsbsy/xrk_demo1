import React from 'react';
import {observable, action} from 'mobx';
import { TodoListView, TodoList, Todo, TimerView } from 'component';
import './index.less';
import { menuData } from './mock';

const appState = observable({
    timer: 0
});
appState.resetTimer = action(function reset() {
    appState.timer = 0;
});

setInterval(action(function tick() {
    appState.timer += 1;
}), 1000);
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:[]
        };
    }
    componentDidMount(){
        this.setState({
            dataSource:menuData
        });
    }
    render(){
        const { dataSource } = this.state;
        const store = new TodoList();
        store.todos.push(
            new Todo("Get Coffee"),
            new Todo("Get Coffee123")
        );
        store.todos[0].finished = true;
        return (
            <div className={`framework-home`}>
                <div className={`framework-home-header`}>
                    header
                </div>
                <div className={`framework-home-content`}>
                    <div className={`framework-home-content-box`}>
                        <div className={`framework-home-content-box-menu`}>
                            {dataSource.map(item => <span key={item.key}>{item.title}</span>)}
                        </div>
                        <div className={`framework-home-content-box-showroom`}>
                            <div className={`framework-home-content-box-showroom-slide`}>
                                <TodoListView todoList={store}/>
                                <TimerView appState={appState} />
                            </div>
                            <div className={`framework-home-content-box-showroom-hatch`}>
                                <a href=''>下栏导航</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}