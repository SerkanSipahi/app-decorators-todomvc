
import { component, on } from 'app-decorators';

@component({
    name: 'todo-new',
    extends: 'input',
})
class TodoNew {

    @on('keypress') onKeypress({ keyCode, target }){

        if (keyCode === 13) {

            // create and trigger event
            let event = new CustomEvent('todo-new', {
                detail: target.value
            });
            document.dispatchEvent(event);

            // cleanup target field
            target.value = '';
        }
    }
}

export {
    TodoNew
}