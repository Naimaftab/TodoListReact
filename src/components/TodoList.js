import TodoItem from './TodoItem';
import EditTodo from "./EditTodo";

export default function TodoList({ 
    todoList, 
    deleteTodo, 
    toggleTodo,
    toggleTodoEdit,
    editTodo}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => todo.edit ? (
        <EditTodo 
        key = {todo.id} 
        todo={todo}
        cancelEditTodo={() => toggleTodoEdit(todo.id)}  
        editTodo={(content) => editTodo(todo.id, content)}
        />
      ) : (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo = {() => deleteTodo(todo.id)}
          toggleTodo = {() => toggleTodo(todo.id)}
          editTodo = {() => toggleTodoEdit(todo.id)}
        />
      ))}
    </ul> //S'il y a au moins une tâche dans le tableau todoList nous parcourons le tableau et créons un composant TodoItem pour chaque tâche.
  ) : (
    <p>Aucune tâche en cours </p>
  );
}