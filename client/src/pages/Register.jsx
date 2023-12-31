import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function submit(e) {
        e.preventDefault();
        if(name === '' || email === '' || password === ''){
            alert('Fields can not be empty enter values');
            return;
        }
        try {
            await axios.post('/register', {
                name,
                email,
                password
            })
            alert('Registration successful. Now you can log in')
            setRedirect(true);
        } catch(e) {
            alert('Registration failed. Please try again later');
        }
    }

    if(redirect){
        return <Navigate to={'/login'} />
    }

    return(
        <div className="mt-4 grow flex items-center justify-around h-20">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={submit}>
                <input type="text" placeholder="John Doe" 
                       value={name} onChange={e => setName(e.target.value)}/>
                <input type="email" placeholder="your@email.com" 
                       value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password"
                        value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already have an account ? <Link to='/login' className="underline">login</Link>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Register;