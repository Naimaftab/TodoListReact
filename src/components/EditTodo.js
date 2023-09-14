import { useState } from 'react';

function EditTodo({ todo, editTodo, cancelEditTodo }){
    const [value, setValue] = useState(todo.content);

    function handleChange(e){
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function handleKeyDown(e){
        if (e.code === 'Enter' && value.length){
            editTodo(value);
            setValue("");
        }
    }

    function handleClick(){
        if (value.length){
            editTodo(value);
            setValue(""); //une fois qu'on a envoyer la donnée on remet le input à vide
    }

}
    return (
        <div className="d-flex flex-row justify-content-center align-items-center mb-10">
            <input 
            type="text"
            onKeyDown={ handleKeyDown }
            onChange={ handleChange }
            value={(value)}
            placeholder="Ajouter une todo" className="mr-15 flex-fill" 
            />
            <button onClick={  cancelEditTodo }className="btn btn-reverse-primary mr-15">Annuler</button>
            <button onClick={ handleClick }className="btn btn-primary ">Sauvegarder</button>
        </div>
    )
}

export default EditTodo;