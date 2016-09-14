
import { component, view, on, Router } from 'app-decorators';

import './todo-new';
import './todo-list';

@component({
    name: 'app-todomvc',
})
@view(`
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input is="todo-new" class="new-todo" placeholder="What needs to be done?" autofocus="">
        </header>
        <section class="main">
            <input class="toggle-all mark-all" id="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul is="todo-list"></ul>
        </section>
        <footer class="footer">
            <span class="todo-count"><strong>0</strong> items left</span>
            <ul class="filters">
                <li class="all"><a href="/todomvc/filter-all">All</a></li>
                <li class="active"><a href="/todomvc/filter-active">Active</a></li>
                <li class="completed"><a href="/todomvc/filter-completed">Completed</a></li>
            </ul>
            <button class="clear-completed">Clear completed</button>
        </footer>
    </section>
`)
class Todomvc {

    created(){

        let router = Router.create({ scope: this });
        router.on('filter /todomvc/filter-{{ type }}', ::this.onSelectfilter);
    }

    @on('changed .mark-all') markAll(){

    }

    @on('click .clear-completed') clearCompleted(){

    }

    onSelectfilter({ params, target }){


        this.setSelected(target);
        this.applyFilter(params.type);

        // 1.) wenn all dann hidden class von allen wegnehmen
        // 2.) wenn active dann hat "completed" noch "hidden" class
        // 3.) wenn complted dann außer completed alles andere hidden


    }

    applyFilter(type) {
        
    }

    setSelected(target){

        // reset filters by removing selected class
        let elements = this.querySelectorAll('.filters li a');
        for(let element of elements){
            element.classList.remove('selected');
        }

        // add selected class to target
        target.classList.add('selected');
    }
}

export {
    Todomvc
}