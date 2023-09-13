import TodoItem from './TodoItem';

export default function TodoList({ todoList, deleteTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </ul> //S'il y a au moins une tâche dans le tableau todoList nous parcourons le tableau et créons un composant TodoItem pour chaque tâche.
  ) : (
    <p>Aucune tâche en cours </p>
  );
}