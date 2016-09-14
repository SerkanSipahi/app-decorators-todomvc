
import { component, on } from 'app-decorators';
import { TodoItem } from './todo-item';

@component({
    name: 'todo-list',
    extends: 'ul',
})
class TodoList {

    created(){

        this.classList.add('todo-list');
    }

    @on('todo-new', document) onNewTodo( event ){

        let todoItem = TodoItem.create({ text: event.detail });
        this.appendChild(todoItem);

    }
}

export {
    TodoList
}