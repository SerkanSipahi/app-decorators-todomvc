
import { component, on, view } from 'app-decorators';

@component({
    name: 'todo-filter',
    extends: 'ul',
})
@view(`
    <li class="all">All</li>
    <li class="active">Active</li>
    <li class="completed">Completed</li>
`)
class TodoFilter {

    created() {

        this.classList.add('filters');
    }

    @on('click .all') onAll( event ){
        console.log('all');
    }

    @on('click .active') onActive( event ){
        console.log('active');
    }

    @on('click .completed') onCompleted( event ){
        console.log('completed');
    }
}

export {
    TodoFilter
}