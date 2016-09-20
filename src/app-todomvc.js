import { component, view, on, Router } from 'app-decorators';
import { addClass, removeClass, show, hide, text, click } from './dom';
import { forEach } from './utils';
import { EVENT_LIST_COUNTS } from './todo-list';

import './todo-new';
import './todo-list';

@component({
    name: 'app-todomvc',
})
@view(`
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input is="todo-new" target=".todo-list" class="new-todo" placeholder="What needs to be done?" autofocus="">
        </header>
        <section class="main">
            <input class="toggle-all mark-all" id="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list" is="todo-list"></ul>
        </section>
        <footer class="footer">
            <span class="todo-count"><strong>0</strong> items left</span>
            <ul class="filters">
                <li class="all"><a href="/filter-all">All</a></li>
                <li class="active"><a href="/filter-active">Active</a></li>
                <li class="completed"><a href="/filter-completed">Completed</a></li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    </section>
`)
class Todomvc {

    created(){

        this._initRouter();

    }

    @on(EVENT_LIST_COUNTS) onListCounts({ params }){

        let $ = ::this.querySelector;
        let { count, left } = params;

        $('.todo-count strong')::text(left);

        if(count > 0){
            $('footer')::show();
        } else {
            $('footer')::hide();
        }

    }

    @on('change .toggle-all') toggleAll(){

        this.querySelector('ul[is="todo-list"]').toggle();

    }

    @on('click .clear-completed') clearCompleted(){

        this.querySelector('[is="todo-list"]').clear();

    }

    _initRouter(){

        let router = Router.create({ scope: this });
        router.on('filter /filter-{{type}}', ::this._onSelectfilter);
    }

    _onSelectfilter({ params, target }){

        /**
         * set filter
         */
        // reset filters by removing selected class
        this.querySelectorAll('.filters li a')::forEach(
            el => el::removeClass('selected')
        );

        // add selected class to target
        target::addClass('selected');

        /**
         * apply filter
         */
        this.querySelector('ul[is="todo-list"]').filter(params.type)
    }
}

export {
    Todomvc
}