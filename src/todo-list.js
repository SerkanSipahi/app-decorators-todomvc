
import { component, on } from 'app-decorators';
import { TodoItem } from './todo-item';
import { forEach, trigger } from './utils';
import { append } from './dom';

import {
    EVENT_TODO_NEW_ITEM,
    EVENT_TODO_LIST_COUNTS,
    EVENT_TODO_COMPLETED_ITEM,
    EVENT_TODO_DELETEED_ITEM
} from './todo-events';

@component({
    name: 'todo-list',
    extends: 'ul',
})
class TodoList {

    @on(EVENT_TODO_NEW_ITEM) onNewItem({ params }){

        let todoItem = TodoItem.create({ text: params });
        this::append(todoItem);

        this.update();

    }

    @on(EVENT_TODO_COMPLETED_ITEM) onCompleted({ target }){

        target.complete();
        this.update();

    }

    @on(EVENT_TODO_DELETEED_ITEM) onDeleted({ target }){

        target.remove();
        this.update();

    }

    clear(){

        this.querySelectorAll('li')::forEach(
            element => element.remove()
        );

        this.triggerCounts({
            count: 0, left: 0, completed: 0
        });

    }

    update(){

        // shortcut for querySelectorAll
        let $         = ::this.querySelectorAll;
        // event args
        let count     = $('li').length;
        let left      = $('li:not(.completed)').length;
        let completed = $('li.completed').length;

        this.triggerCounts({
            count, left, completed
        });
    }

    triggerCounts(params){

        this::trigger(EVENT_TODO_LIST_COUNTS, params);

    }

}

export {
    TodoList
}