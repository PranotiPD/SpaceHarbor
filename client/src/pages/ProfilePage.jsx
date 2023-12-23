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
            <div className="text-center max-w-lg mx-auto">
                Logged in as {user.name} {user.email} <br/>
                <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
            </div>
            
        </div>
    )
}

export default ProfilePage;
