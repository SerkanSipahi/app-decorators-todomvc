
import { component, on, view } from 'app-decorators';

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

    @on('change input[type="checkbox"]') onCompleted(){

        this.classList.toggle('completed');

    }

    @on('click .destroy') onClickDestroy(){

        this.parentElement.removeChild(this);

    }
}

export {
    TodoItem
}