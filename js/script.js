var app = new Vue({
  el : '#app',
  data : {
    newTodo: '',
    todos : [
      'Fare gli esercizi',
      'Andare in palestra',
      'Lavare i piatti',
      'Portare al parco il cane'
    ],
  },
  methods : {
    addTodo(){
      this.todos.push(this.newTodo);
      this.newTodo = '';
    }
  },
})
