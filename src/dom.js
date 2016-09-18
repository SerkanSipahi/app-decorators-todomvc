
let hasClass = function(cls) {
    this.classList.contains(cls);
};

let addClass = function(cls) {
    this.classList.add(cls);
};

let removeClass = function(cls) {
    this.classList.remove(cls);
};

let toggleClass = function(cls) {
    this.classList.toggle(cls);
};

let append = function(node){
    this.appendChild(node);
};

let remove = function() {
    this.parentElement.removeChild(this);
};

let show = function(){
    this.style.display = 'block';
};

let hide = function(){
    this.style.display = 'none';
};

let text = function(text){
    this.textContent = text;
};

let attribute = function(key, value){

    if(key && value){
        this.setAttribute(key, value);
    } else if(key && !value){
        return this.getAttribute(key);
    }
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
};