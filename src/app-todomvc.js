
import { component, view } from 'app-decorators';

import './todo-new';
import './todo-list';
import './todo-filter';

@component({
    name: 'app-todomvc',
})
@view(`
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input is="todo-new" placeholder="What needs to be done?" autofocus="">
        </header>
        <section class="main">
            <input class="toggle-all" id="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul is="todo-list"></ul>
        </section>
        <footer class="footer">
            <span class="todo-count"><strong>0</strong> items left</span>
            <ul is="todo-filter"></ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    </section>
`)
class Todomvc {
}

export {
    Todomvc
}