import { useState } from 'react';

function AddTodo({ addTodo }){
    const [value, setValue] = useState("");

    function handleChange(e){
        const inputValue = e.target.value; //target represente la value 
        setValue(inputValue);
    }

    function handleKeyDown(e){
        if (e.code === 'Enter' && value.length){ //voir dans la console log quel touche est focus "code"
            addTodo(value);
            setValue("");
        }
    }

    function handleClick(){
        if (value.length){
            addTodo(value);
            setValue(""); //une fois qu'on a envoyer la donnée on remet le input à vide
    }

}
    return (
        <div className="d-flex flex-row justify-content-center align-items-center mb-20">
            <input 
            type="text"
            onKeyDown={ handleKeyDown }
            onChange={ handleChange }
            value={(value)}
            placeholder="Ajouter une todo" className="mr-15 flex-fill" 
            />
            <button onClick={ handleClick }className="btn btn-primary ">Ajouter</button>
        </div>
    )
}

export default AddTodo;