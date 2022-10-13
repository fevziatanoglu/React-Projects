import StartScreen from "./startscreen";
import TodoPage from "./todoPage";

export default function HomePage({user}){


    return(
        <div className="text-light display-1 text center mt-5">
            {localStorage.getItem("user") ? <TodoPage user={user}/> : <StartScreen/>}
        </div>
    )
}