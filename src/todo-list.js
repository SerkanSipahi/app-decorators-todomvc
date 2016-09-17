
import { component, on } from 'app-decorators';
import { TodoItem } from './todo-item';
import { trigger } from './trigger';

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


    @on(EVENT_TODO_COMPLETED_ITEM) onCompleted({ target }){

        target.classList.toggle('completed');

        this._updateCounts();

    }

    @on(EVENT_TODO_DELETEED_ITEM) onDeleted({ target }){

        target.parentElement.removeChild(target);

        this._updateCounts();

    }

    @on(EVENT_TODO_NEW_ITEM, document) onNewItem({ params }){

        let todoItem = TodoItem.create({ text: params });
        this.appendChild(todoItem);

        this._updateCounts();

    }

    _updateCounts(){

        // shortcut for querySelectorAll
        let $         = ::this.querySelectorAll;
        // event args
        let count     = $('li').length;
        let left      = $('li:not(.completed)').length;
        let completed = $('li.completed').length;

        trigger(EVENT_TODO_LIST_COUNTS, {
            count, left, completed
        }, this);

    }

}

export {
    TodoList
}