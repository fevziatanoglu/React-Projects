

export default function TodoItem(props) {
    const todo = props.todo;
    const removeTodo = props.removeTodo;
    const checkTodo = props.checkTodo;

    const todoItemClass = "bg-light d-flex flex-row justify-content-between  align-item-center text-dark fs-6 rounded p-2 m-5 border border-secondary";

    const todoItemClassChecked = todoItemClass + " opacity-50 text-decoration-line-through";
    return (

        <div className={
            !todo.complated 
            ? todoItemClass 
            : todoItemClassChecked}>

            <div className="pt-3">{todo.text}</div>
            <div>
                <button className="btn delete-btn btn-danger m-2 px-5" onClick={() => { removeTodo(todo.id) }}
                >x</button>
                <button className="btn check-btn btn-success m-2 px-5" onClick={ () => checkTodo(todo.id)}>✓</button>
            </div>
        </div>
    )

}