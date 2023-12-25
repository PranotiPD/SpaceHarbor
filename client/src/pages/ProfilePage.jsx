import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router";
import axios from "axios";
// import PlacesPage from "./PlacesPage";
import AccountNav from "../Components/AccountNav";

function ProfilePage() {
    const [redirect, setRedirect] = useState(null);
    const {user, ready, setUser} = useContext(UserContext);

    async function logout() {
       await axios.post('/logout')
       setUser(null)
       setRedirect('/')
    }

    if(!ready){
        return '...loading'
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'} />
    }

    

    if(redirect){
        return <Navigate to={redirect} />
    }


    return(
        <div>
            <AccountNav />
            <div className="text-center max-w-lg mx-auto gap-2 flex flex-col items-center">
                <div className="flex justify-center text-lg bg-gray-100 px-16 py-2 rounded-2xl"><h1>Username: {user.name}</h1></div>
                <div className="flex justify-center text-lg bg-gray-100 px-16 py-2 rounded-2xl"><h1>Password: {user.name}</h1></div>
                <button onClick={logout} className="primary max-w-xs mt-2">Logout</button>
            </div>
            
        </div>
    )
}

export default ProfilePage;
