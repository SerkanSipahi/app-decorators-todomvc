
import { component, view, on, Router } from 'app-decorators';
import { EVENT_TODO_LIST_COUNTS } from './todo-events';
import { forEach } from './utils';
import { addClass, removeClass, show, hide, text } from './dom';

import './todo-new';
import './todo-list';

@component({
    name: 'app-todomvc',
})
@view(`
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input is="todo-new" trigger-target=".todo-list" class="new-todo" placeholder="What needs to be done?" autofocus="">
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

    @on(EVENT_TODO_LIST_COUNTS) onListCounts({ params }){

        let $ = ::this.querySelector;
        let { count, left } = params;

        $('.todo-count strong')::text(left);

        if(count > 0){
            $('footer')::show();
        } else {
            $('footer')::hide();
        }

    }

    @on('changed .mark-all') markAll(){

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
            element => element::removeClass('selected')
        );

        // add selected class to target
        target::addClass('selected');

        /**
         * apply filter
         */
        this._applyFilter(params.type);
    }

    _applyFilter(type){

        switch(type) {
            case 'all':
                this._applyFilterAll();
                break;
            case 'active':
                this._applyFilterActive();
                break;
            case 'completed':
                this._applyFilterCompleted();
                break;
        }
    }

    _applyFilterAll(){

        this.querySelectorAll( 'ul[is="todo-list"] li')::forEach(
            element => element::removeClass('hidden')
        );
    }

    _applyFilterActive(){

        this._dom('remove', 'ul[is="todo-list"] li', 'hidden');
        this._dom('add',    'ul[is="todo-list"] li.completed', 'hidden');
    }

    _applyFilterCompleted(){

        this._dom('remove', 'ul[is="todo-list"] li', 'hidden');
        this._dom('add'   , 'ul[is="todo-list"] li:not(.completed)', 'hidden');
    }

    _dom(type, selector, cls){

        this.querySelectorAll(selector)::forEach(
            element => element.classList[type](cls)
        );
    }
}

export {
    Todomvc
}