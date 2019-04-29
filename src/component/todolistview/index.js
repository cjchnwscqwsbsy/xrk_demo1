import React, { Component } from 'react';
import { observer } from 'mobx-react';

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
);

@observer
export default class TodoListView extends Component {
    render(){
        const { todoList } = this.props;
        return (
            <div>
                <ul>
                    {todoList.todos.map(item => <TodoView todo={item} key={item.id} />)}
                </ul>
                Tasks left: {todoList.unfinishedTodoCount}
            </div>
        );
    }
}