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

    todosDelete : [],
  },
  methods : {
    // Aggiungere alla Lista
    addTodo(){
      this.todos.push(this.newTodo);
      this.newTodo = '';
    },

    // Rimuovere dalla Lista
    deleteTodo(index){
      this.todosDelete.push(this.todos[index]);
      this.todos.splice(index, 1);
    },
    restoreTodo(index){
      this.todos.push(this.todosDelete[index]);
      this.todosDelete.splice(index,1);
   },
    confirmDelete(index){
      this.todosDelete.splice(index,1);
   },
    deleteAll(){
      this.todosDelete.splice(0,this.todosDelete.length);
   }
  },
})
