
import { component, on } from 'app-decorators';
import { trigger } from './utils';
import { EVENT_TODO_NEW_ITEM } from './todo-events';

@component({
    name: 'todo-new',
    extends: 'input',
})
class TodoNew {

    @on('keypress') onKeypress({ keyCode }){

        if (keyCode !== 13 || this.value === ''){
            return;
        }

        let { value } = this.attributes.getNamedItem('trigger-target');
        let scope     = document.querySelector(value);
        scope::trigger(EVENT_TODO_NEW_ITEM, this.value);

        this.value = '';

    }

}

export {
    TodoNew
}