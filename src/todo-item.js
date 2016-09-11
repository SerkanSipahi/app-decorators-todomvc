
import { component, on, view } from 'app-decorators';

@component({
    name: 'todo-item',
    extends: 'li',
})
@view(`
    <div class="view">
        <input class="toggle" type="checkbox" checked="">
        <label>{{ text }}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="abc">
`)
class TodoItem {

    @on('click .destroy') onClickDestroy(){

        this.parentElement.removeChild(this);
    }
}

export {
    TodoItem
}