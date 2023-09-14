export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo,selectTodo}) {
    return (
      <li onClick={selectTodo} className={`mb-10 d-flex justify-content-center align-items-center p-10 ${ todo.selected ? 'selected' : "" }`}>
        <span className="flex-fill">{todo.content} { todo.done && /* le && sert a faire un toggle */ "( ✓ )"} </span>
        
        <button onClick={ e => 
        { e.stopPropagation(); 
          toggleTodo()} } 
          className="btn btn-primary mr-15">Valider</button>
        
        <button onClick={ e => 
        { e.stopPropagation();
          editTodo() }} 
        className="btn btn-primary mr-15">Modifier</button>
        
        <button onClick={ e =>
          {e.stopPropagation(); deleteTodo()}}
           className="btn btn-reverse-primary" >
          Supprimer
        </button>
      </li>
    );
  }