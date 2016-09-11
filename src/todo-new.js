
import { component, on } from 'app-decorators';

@component({
    name: 'todo-new',
    extends: 'input',
})
class TodoNew {

    created(){

        this.classList.add('new-todo');
    }

    @on('keypress') onKeypress({ keyCode, target }){

        if (keyCode === 13) {

            // create and trigger event
            let event = new CustomEvent('todo-new', {
                detail: target.value,
                bubbles: true,
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