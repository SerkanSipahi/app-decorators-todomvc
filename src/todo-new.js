import { component, on } from 'app-decorators';
import { trigger } from './utils';
import { attribute } from './dom';
import { EVENT_ITEM_NEW } from './todo-list';

@component({
    name: 'todo-new',
    extends: 'input',
})
export class TodoNew {

    @on('keypress') onKeypress({ keyCode }){

        if (keyCode !== 13 || this.value === ''){
            return;
        }

        let selector = this::attribute('target');
        let scope    = document.querySelector(selector);
        scope::trigger(EVENT_ITEM_NEW, this.value);

        this.value = '';

    }

}