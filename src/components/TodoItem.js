export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo}) {
    return (
      <li className="mb-10 d-flex justify-content-center align-items-center p-10">
        <span className="flex-fill">{todo.content} { todo.done && /* le && sert a faire un toggle */ "( ✓ )"} </span>
        <button onClick={ toggleTodo } className="btn btn-primary mr-15">Valider</button>
        <button onClick={ editTodo } className="btn btn-primary mr-15">Modifier</button>
        <button className="btn btn-reverse-primary" onClick={deleteTodo}>
          Supprimer
        </button>
      </li>
    );
  }