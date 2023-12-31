import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from 'axios';
import { UserContext } from "../UserContext";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const { setUser } = useContext(UserContext);
    async function submit(e) {
        e.preventDefault();
        if(email === '' || password === '') {
            alert('Fields can not be empty enter values.')
            return;
        }
        console.log(email)
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            }) 
            if(data) {
                setUser(data);
                alert('Login successful');
                setRedirect(true);
            } else {
                alert('Enter credentials correctly')
            }
        } catch(e){
            alert('Invalid username or password')
        }
    }

    if(redirect) {
        return <Navigate to={'/'}/>
    }
    return(
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Login</h1>
            <form className="max-w-2xl mx-auto" onSubmit={submit}>
                <input type="email" 
                        placeholder="your@email.com"
                        value={email} 
                        onChange={e=> setEmail(e.target.value)} />
                <input type="password" 
                        
                        placeholder="password"
                        value={password} 
                        onChange={e=> setPassword(e.target.value)}/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">
                    Dont have acoount yet? <Link to='/register' className="underline">Register now</Link>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginPage;