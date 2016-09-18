import { component, view, on } from 'app-decorators';
import { remove, toggleClass } from './dom';
import { trigger } from './utils';

export const EVENT_ITEM_COMPLETED = 'ITEM_COMPLETED';
export const EVENT_ITEM_DELETEED  = 'ITEM_DELETEED';

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
export class TodoItem {

    @on('change li input[type="checkbox"]') onCompleted(){

        this::trigger(EVENT_ITEM_COMPLETED);

    }

    @on('click li button.destroy') onDeleted(){

        this::trigger(EVENT_ITEM_DELETEED);

    }

    complete(){

        this::toggleClass('completed');

    }

    remove() {

        this::remove();

    }

}
