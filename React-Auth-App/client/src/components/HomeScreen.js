

export default function HomeScreen({user , setUser}){

    const currentUser = JSON.parse(localStorage.getItem("user"));

    

    return(

        <div className="text-center m-5 p-5 display-1">
            {currentUser 
            ? <div>Hello {currentUser.name} ,this is your Home Page</div> 

            : <div>Hi! This is Home Page , Click Sign In button to sign in</div>}
            
        </div>


    )
}