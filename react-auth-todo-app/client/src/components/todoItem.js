
export default function TodoItem({ todo,deleteUserTodo,checkUserTodo }) {


   console.log(todo.check)

    return (
        <div className={todo.check ? "bg-success text-light rounded border border-5 border-light p-3 m-2" : " opacity-50 bg-success text-light rounded border border-5 border-light p-3 m-2"} >
            <div className="d-flex flex-row justify-content-between">

                <div className={todo.check ? "fs-5 " : "fs-5 text-decoration-line-through"}>
                    {todo.text}

                    
                </div>
                <div className="d-flex justify-content-center">
                    <div onClick={ (e) => {  deleteUserTodo(todo._id)}} className="btn btn-danger rounded border border-2 border-light mx-2">x </div>
                    <div onClick={ (e)=>{checkUserTodo(todo._id)}} className="btn btn-success rounded border border-2 border-light mx-2">+</div>
                </div>




            </div>

        </div>
    )
}