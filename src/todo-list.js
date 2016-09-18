import { component, on } from 'app-decorators';
import { TodoItem } from './todo-item';
import { forEach, trigger } from './utils';
import { append } from './dom';
import { EVENT_ITEM_COMPLETED, EVENT_ITEM_DELETEED } from './todo-item';

export const EVENT_ITEM_NEW    = 'ITEM_NEW';
export const EVENT_LIST_COUNTS = 'LIST_COUNTS';

@component({
    name: 'todo-list',
    extends: 'ul',
})
export class TodoList {

    @on(EVENT_ITEM_NEW) onNewItem({ params }){

        let todoItem = TodoItem.create({ text: params });
        this::append(todoItem);

        this.update();

    }

    @on(EVENT_ITEM_COMPLETED) onCompleted({ target }){

        target.complete();
        this.update();

    }

    @on(EVENT_ITEM_DELETEED) onDeleted({ target }){

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

    triggerCounts(params){

        this::trigger(EVENT_LIST_COUNTS, params);

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

}