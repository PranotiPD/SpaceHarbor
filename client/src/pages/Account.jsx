import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router";
import {Link} from 'react-router-dom';
import axios from "axios";
import PlacesPage from "./PlacesPage";

function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const {user, ready, setUser} = useContext(UserContext);
    const { subpage } = useParams();

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

    function linkClasses(type=null){
        let classes =  'py-2 px-6 ';
        if(type === subpage || (type === 'profile' && subpage === undefined)){
            classes += 'bg-primary text-white rounded-full'
        }
        console.log(classes)
        return classes;
    }

    if(redirect){
        return <Navigate to={redirect} />
    }


    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-6 mb-8">
                <Link className={linkClasses('profile')} to='/account/profile'>My profile</Link>
                <Link className={linkClasses('bookings')} to='/account/bookings'>My bookings</Link>
                <Link className={linkClasses('places')} to='/account/places'>My accomodations</Link>
            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} {user.email} <br/>
                    <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
                </div>
            )}
            {subpage === 'places' && (
                <PlacesPage />
            )}
        </div>
    )
}

export default AccountPage;
