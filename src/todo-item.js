
import { component, view, on } from 'app-decorators';
import { trigger } from './utils';
import { remove, toggleClass } from './dom';

import {
    EVENT_TODO_COMPLETED_ITEM,
    EVENT_TODO_DELETEED_ITEM
} from './todo-events';

@component({
    name: 'todo-item',
    extends: 'li',
})
@view(`
    <div class="view">
        <input class="toggle" type="checkbox">
        <label>{{ text }}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="abc">
`)
class TodoItem {

    @on('change li input[type="checkbox"]') onCompleted(){

        this::toggleClass('completed');
        this.complete();

    }

    @on('click li button.destroy') onDeleted(){

        this.remove();

    }

    complete(){

        this::trigger(EVENT_TODO_COMPLETED_ITEM);

    }

    remove() {

        this::trigger(EVENT_TODO_DELETEED_ITEM);
        this::remove();

    }

}

export {
    TodoItem
}