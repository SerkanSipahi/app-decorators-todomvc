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

        let count     = this.getAllCount();
        let left      = this.getLeftCount();
        let completed = this.getCompleteCount();

        this.triggerCounts({
            count, left, completed
        });
    }

    count(type){

        switch(type) {
            case 'all':
                return this.getAllCount();
            break;
            case 'left':
                return this.getLeftCount();
            break;
            case 'complete':
                return this.getCompleteCount();
            break;
        }

    }

    getAllCount(){

        return this.querySelectorAll('li').length;

    }

    getLeftCount(){

        return this.querySelectorAll('li:not(.completed)').length;

    }

    getCompleteCount(){

        return this.querySelectorAll('li.completed').length;

    }

    triggerCounts(params){

        this::trigger(EVENT_TODO_LIST_COUNTS, params);

    }

}

export {
    TodoList
}