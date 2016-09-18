
let hasClass = function(cls) {
    this.classList.contains(cls);
    return this;
};

let addClass = function(cls) {
    this.classList.add(cls);
    return this;
};

let removeClass = function(cls) {
    this.classList.remove(cls);
    return this;
};

let toggleClass = function(cls) {
    this.classList.toggle(cls);
    return this;
};

let append = function(node){
    this.appendChild(node);
    return this;
};

let remove = function() {
    this.parentElement.removeChild(this);
};

let show = function(){
    this.style.display = 'block';
    return this;
};

let hide = function(){
    this.style.display = 'none';
    return this;
};

let text = function(text){
    this.textContent = text;
    return this;
};

let attribute = function(key, value){

    if(key && value){
        this.setAttribute(key, value);
        return this;
    } else if(key && !value){
        return this.getAttribute(key);
    }
};

let find = function(selector){
    return this.querySelector(selector);
};

let findAll = function(selector){
    return this.querySelectorAll(selector);
};

let click = function(){

    this.click();
    return this;

};

export {
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    append,
    remove,
    show,
    hide,
    text,
    attribute,
    find,
    findAll,
    click,
};